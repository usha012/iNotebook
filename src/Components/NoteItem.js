import React,{useContext} from 'react'
import NoteContext from '../Context/notes/noteContext';
export const NoteItem = (props) => {
    const Context = useContext(NoteContext);
    const {deleteNote} = Context;
    const { note,updateNote } = props;
    return (
        <>
            <div className='col-3'>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className='d-flex align-items-center justify-content-between'> 
                        <h5 className="card-title">{note.title}</h5> 
                            <div>
                            <i className="fa-sharp fa-regular fa-pen-to-square me-2 cursor" onClick={()=>{updateNote(note)}}></i>
                            <i className="fa-sharp fa-regular fa-trash-can cursor" onClick={()=>{deleteNote(note._id)}}></i>
                            </div>
                        </div>
                        
                        <p className="card-text">{note.description}</p>
                        
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}
