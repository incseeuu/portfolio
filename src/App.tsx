import React from 'react';
import './scss/App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import AnimationComponent from "./common/components/AnimationComponent";



function App() {
    return (
        <div className='App' style={{overflow: 'hidden'}}>
            <Sidebar/>
            <AnimationComponent/>
        </div>
    );
}

export default App;
