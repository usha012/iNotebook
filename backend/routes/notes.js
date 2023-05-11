const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/FetchUser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');
// const {body, validationResult} =require(express - ExpressValidator)

//Route 1: Get all the notes using: Get notes/fetchallnotes
router.post('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        res.status(500).send({ error: "Some error Occured" })
        console.log(error)
    }


})

//Route 2: Add new  note using: Get notes/fetchallnotes
router.post('/addnote', fetchuser, [
    body('title', "Enter a valid title").isLength({ min: 5 }),
    body('description', "description must be 5 character").isLength({ min: 5 }),

],
    async (req, res) => {
        try {
            const { title, description, tag } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(401).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const saveNote = await note.save()

            res.json(saveNote)
        } catch (error) {
            res.status(500).send({ error: "Some error Occured" })
            console.log(error)
        }
    })
module.exports = router