import React, {createContext, useEffect, useState} from 'react';
import './scss/App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import AnimationComponent from "./common/components/AnimationRout/AnimationComponent";
import Burger from "./common/components/Burger/Burger";
import {motion} from "framer-motion";

export const CursorContext = createContext<any>(null)

function App() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })

    const [cursorVariants, setCursorVariants] = useState('default')

    useEffect(() => {

        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {

        }
    }, [])

    const variants: any = {
        default: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            background: 'none',
        },
        text: {
            height: 48,
            width: 48,
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            background: '#fff',
            mixBlendMode: 'difference',
        }
    }

    const variantsMicro: any = {
        default: {
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
        },
        text: {
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
            opacity: 0,
        }
    }

    const textEnter = () => setCursorVariants('text')
    const textLeave = () => setCursorVariants('default')



    return (
        <CursorContext.Provider value={{textEnter, textLeave}}>
            <div className='App' >
                <Burger callback={setToggleMenu} value={toggleMenu}/>
                <Sidebar callback={setToggleMenu} toggleMenu={toggleMenu}/>
                <AnimationComponent/>
                <motion.div className='microCursor'
                            variants={variantsMicro}
                            animate={cursorVariants}
                            transition={{duration: 0}}
                />
            </div>
            <motion.div className='cursor'
                        variants={variants}
                        animate={cursorVariants}

            />

        </CursorContext.Provider>
    );
}

export default App;
