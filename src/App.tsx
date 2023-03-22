import React, {createContext, useState} from 'react';
import './scss/App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import AnimationComponent from "./common/components/AnimationRout/AnimationComponent";
import Burger from "./common/components/Burger/Burger";

export const ThemeContext = createContext<any>(null)

function App() {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'))
    }

    const [toggleMenu, setToggleMenu] = useState(false)
    console.log(toggleMenu)

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div id={theme} className='App' style={{overflow: 'hidden'}}>
                <Burger callback={setToggleMenu} value={toggleMenu}/>
                <Sidebar callback={setToggleMenu} toggleMenu={toggleMenu}/>
                <AnimationComponent/>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
