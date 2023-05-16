import React from 'react'
import { Navbar } from './Navbar';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { About } from './About';
import { Home } from './Home';



export const MainComponents = () => {
    return (
        <>
            {/* 
            <Navbar /> */}
<h1>iNoteBook</h1>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {/* <Route path="/" element={<Home {...props} text={"Welcome"} />} />
                    <Route path="/user" element={<User {...props} />} /> */}
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
