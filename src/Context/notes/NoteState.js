import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{

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
  return(
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>

  )  
}
export default NoteState;