import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { Route, Routes, Navigate } from 'react-router-dom';


const Body = () => {
    return (

        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Navigate
                    to="/home" />} />
            </Routes>

        </div>
    );

}


export default Body;