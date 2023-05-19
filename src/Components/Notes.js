import React,{useContext} from 'react'
import NoteContext from '../Context/notes/noteContext';
import { NoteItem } from './NoteItem';

export const Notes = () => {
    const Context = useContext(NoteContext);
    const {notes, setNotes} = Context
  return (
    <>
    <div className='container'>
    <h4 className='py-3'>Your notes</h4>
    <div className='row'>
      {notes.map((note)=>{
      return <NoteItem key={note._id} note={note}/>

      })}

    </div>

    </div>
  
   
    </>
  )
}
