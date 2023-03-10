import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../../components/Home/Home";
import Skills from "../../components/Skills/Skills";
import About from "../../components/About/About";
import Works from "../../components/Works/Works";
import Contact from "../../components/Contact/Contact";
import {AnimatePresence} from "framer-motion";

const AnimationComponent = () => {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/skills'} element={<Skills/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/works'} element={<Works/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'*'} element={<Home/>}/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimationComponent;