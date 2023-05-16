import NoteContext from "./noteContext";

const NoteState =(props)=>{
    const state ={
       "name": "usha",
       "class":"6b"
    }
  return(
    <NoteContext.Provider value={state}>
      {props.child}
    </NoteContext.Provider>

  )
}
export default NoteState;