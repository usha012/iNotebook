import React, { useContext } from 'react'
import NoteContext from '../Context/notes/noteContext';

export const Home = () => {
  const Context = useContext(NoteContext);
  const {notes, setNotes} = Context
  return (
    <>
       <div>welcome home</div>
       {notes.map((notes)=>{
        return notes.title;

       })}
    </>
 
  )
}
