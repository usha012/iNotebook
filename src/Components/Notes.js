import React, { useContext, useEffect, useRef,useState } from 'react'
import NoteContext from '../Context/notes/noteContext';
import { NoteItem } from './NoteItem';
import { AddNote } from './AddNote'

export const Notes = () => {
  const Context = useContext(NoteContext);
  const { notes, getNotes } = Context;
  useEffect(() => {
    getNotes()
  }, [])

  const updateNote = (currentnote) => {
    ref.current.click();
    setNote(currentnote);
  }
  const ref = useRef(null)


  const [note, setNote] = useState({ title: "", description: "", tag: "default" })

  const handleClick = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
      <AddNote />

      <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name='edescription' onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name='etag' onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>



      <div className='container'>
        <h4 className='py-3'>Your notes</h4>
        <div className='row'>
          {notes.map((note, i) => {
            return <NoteItem key={note._id + i} updateNote={updateNote} note={note} />

          })}

        </div>

      </div>


    </>
  )
}
