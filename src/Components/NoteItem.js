import React from 'react'
export const NoteItem = (props) => {
    const { note } = props;
    return (
        <>
         
                <div className='col-3'>
                    <div className="card mb-3">
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <div className='d-flex align-items-center justify-content-between'> 
                            <h5 className="card-title">{note.title}</h5> 
                                <div>
                                <i className="fa-sharp fa-regular fa-pen-to-square me-2 cursor"></i>
                                <i className="fa-sharp fa-regular fa-trash-can cursor"></i>
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
