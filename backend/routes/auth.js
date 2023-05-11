const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { validationResult, body, param, query } = require('express-validator');
const app = express()
const bcrypt = require('bcryptjs');
const JWT_SECRET = 'harryisgood$boy';
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/FetchUser');

//Route1: create a user using : Post   "./api/auth" .doesn't require Auth
router.post('/createuser',
    body('email', "Enter valid email").isEmail(),
    body('name', "Enter valid name").isLength({ min: 3 }),
    body('password', "Enter valid password").isLength({ min: 8 }),
    async (req, res) => {
        const { name, email, password } = req.body
        const result = validationResult(req);

        const salt = await bcrypt.genSalt(10)
        const secpass = await bcrypt.hash(password, salt);

        if (result.isEmpty()) {

            //    check whether user is already present with same email in db
            let user = await User.findOne({ email: email })

            if (!user) {
                user = await User.create({
                    name: name,
                    password: secpass,
                    email: email
                })
                const data = {
                    user: {
                        id: user.id

                    }
                };
                const authtoken = jwt.sign(data, JWT_SECRET);
                // console.log(jwtData);
                res.json({ authtoken });
                // res.send(user);
            }
            else {
                res.send({ message: "Already in db" })
            }

        }
        else {

            res.send({ errors: result.array() });
        }



    });


//Route 2: authentication end point
router.post('/login', [
    body('email', "Enter valid email").isEmail(),
    body('password', "Pasword cannot be blank").exists(),
],
    async (req, res) => {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });

        }

        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email: email });
            if (!user) {
                return res.status(400).json({ errors: "please login valid credentials" });
            }

            const passwordComapre = await bcrypt.compare(password, user.password);
            if (!passwordComapre) {
                return res.status(400).json({ errors: "please login valid credentials" });
            }

            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            res.json({ authtoken });


        } catch (error) {
            res.status(500).send({ error: "Some error Occured" })
            console.log(error)
        }

    }

)

//Route 3: Logged in user details
router.post('/getuser', fetchuser ,async (req, res) => {
    try {
        userId= req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        res.status(500).send({ error: "Some error Occured" })
        console.log(error)
    }
}
)

module.exports = router