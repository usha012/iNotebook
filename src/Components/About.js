import React, { useContext } from 'react';
import NoteContext from '../Context/notes/noteContext';

export const About = () => {
  const a = useContext("NoteContext")
  return (
    <div>welcome About</div>
  )
}
