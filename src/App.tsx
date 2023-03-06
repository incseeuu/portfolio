import React from 'react';
import './scss/App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import {Route, Routes} from 'react-router-dom';
import Home2 from './components/Home/Home';
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className='App'>
        <Sidebar/>
        <Routes>
            <Route path={'/'} element={<Home2/>}/>
            <Route path={'/skills'} element={<Skills/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/works'} element={<Works/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
