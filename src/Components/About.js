import React, { useContext, useEffect } from 'react';
import NoteContext from '../Context/notes/noteContext';

export const About = () => {
  const a = useContext(NoteContext)
  console.log(a);
  useEffect(()=>{
    a.update();
  },[])
  return (
    <>
    <div>welcome About {a.state.name}</div>

    </>
  )
}
