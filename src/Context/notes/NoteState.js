import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http:localhost:5000"
  const initialnotes = [
    {
      "_id": "646208729781043fc0762b23",
      "user": "646207fe9781043fc0762b20",
      "title": "new tile",
      "description": "please wake up 1",
      "tag": "personal",
      "date": "1684146290174",
      "__v": 0
    },
    {
      "_id": "64620aa84ea03015248abb12",
      "user": "646207fe9781043fc0762b20",
      "title": "new tile",
      "description": "please wake up 1",
      "tag": "personal",
      "date": "1684146856063",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(initialnotes)

  // AddNote
  const addNote = async(title, description, tag) => {
    
    // api call 

    const response = await fetch(`${host}/api/notes/addnote`,{
      mathod: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2MjA3ZmU5NzgxMDQzZmMwNzYyYjIwIn0sImlhdCI6MTY4NDE0NjgzM30.ivvfJxV_Y-ZKDRaYHz81qyQGHcA7Z8GZeveDhsjB2ho"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();

    
    const note = {
      "_id": "64620aa84ea03015248abb12",
      "user": "646207fe9781043fc0762b20",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "1684146856063",
      "__v": 0
    }
    setNotes(notes.concat(note))

  }

  // DeleteNote
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
    console.log("deliting note wirth id" + id);

  }
  // EditNote
  const editNote = async (id, title, description, tag) => {

    // api call 

    const response = await fetch(`${host}api/notes/updatenote/${id}`,{
      mathod: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2MjA3ZmU5NzgxMDQzZmMwNzYyYjIwIn0sImlhdCI6MTY4NDE0NjgzM30.ivvfJxV_Y-ZKDRaYHz81qyQGHcA7Z8GZeveDhsjB2ho"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();


    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tga = tag;
      }

    }

  }
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>

  )
}
export default NoteState;