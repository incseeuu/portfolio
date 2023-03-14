import React, {useState} from 'react';
import './scss/App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import AnimationComponent from "./common/components/AnimationRout/AnimationComponent";
import Burger from "./common/components/Burger/Burger";



function App() {

    const [toggleMenu, setToggleMenu] = useState(true)

    console.log(toggleMenu)

    return (
        <div className='App' style={{overflow: 'hidden'}}>
            <Burger callback={setToggleMenu} value={toggleMenu}/>
            <Sidebar callback={setToggleMenu} toggleMenu={toggleMenu}/>
            <AnimationComponent/>
        </div>
    );
}

export default App;
