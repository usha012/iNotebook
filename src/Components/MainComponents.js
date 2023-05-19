import React from 'react'
import { Navbar } from './Navbar';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { About } from './About';
import { Home } from './Home';
import NoteState from '../Context/notes/NoteState';
import { Alert } from './Alert';



export const MainComponents = () => {
    return (
        <>
            {/* 
            <Navbar /> */}
      
                <NoteState>
                    <BrowserRouter>
                        <Navbar />
                        <Alert message={"Notes Delete"}/>
                        {/* <div> */}
                        <Routes>
                            {/* <Route path="/" element={<Home {...props} text={"Welcome"} />} />
                                <Route path="/user" element={<User {...props} />} /> */}
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                        {/* </div> */} 
                    </BrowserRouter>
                </NoteState>
          
        </>
    )
}
