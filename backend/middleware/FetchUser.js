var jwt = require('jsonwebtoken');
const JWT_SECRET = 'harryisgood$boy';

const fetchuser =(req, res, next)=>{

    // Get user from jwt token and add id  to reqobject
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:'please authenticate usign a valid token'})
    }
    try {
        const dataverify = jwt.verify(token, JWT_SECRET );
        req.user = dataverify.user
        // req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error:'please authenticate usign a valid token'})
    }

}

module.exports = fetchuser;