import React, {useContext} from 'react';
import s from './Sidebar.module.scss'
import {NavLink} from "react-router-dom";
import {CursorContext} from "../../App";
import useWindowDimensions from '../../hooks/windowDimensions';

type PropsType = {
    toggleMenu: boolean
    callback: (toggleMenu: boolean) => void
}

const Sidebar: React.FC<PropsType> = ({toggleMenu, callback}) => {

    const { height, width } = useWindowDimensions()

    const {textEnter, textLeave} = useContext(CursorContext)

    const containerClass = s.container + (!toggleMenu ? ' ' + s.active : '')

    const toggleMenuHandler = () => {
        width && width < 913 && callback(false)
    }

    return (
        <div className={containerClass} >
            <div className={s.content}>
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>Inc
                    <span onMouseEnter={textEnter} onMouseLeave={textLeave}>seeuu</span>
                </h1>
                <div  className={s.navigation}>
                    <div className={s.navItem}>
                        <NavLink onMouseEnter={textEnter} onMouseLeave={textLeave} to={'/'} className={({isActive}) => isActive ? s.activeLink : ''} onClick={toggleMenuHandler} >Home</NavLink>
                    </div>
                    <div className={s.navItem} >
                        <NavLink onMouseEnter={textEnter} onMouseLeave={textLeave} to={'/about'} className={({isActive}) => isActive ? s.activeLink : ''} onClick={toggleMenuHandler}>About Me</NavLink>
                    </div>
                    <div className={s.navItem}>
                        <NavLink onMouseEnter={textEnter} onMouseLeave={textLeave} to={'/skills'} className={({isActive}) => isActive ? s.activeLink : ''} onClick={toggleMenuHandler}>Skills</NavLink>
                    </div>
                    <div className={s.navItem}>
                        <NavLink onMouseEnter={textEnter} onMouseLeave={textLeave} to={'/works'} className={({isActive}) => isActive ? s.activeLink : ''} onClick={toggleMenuHandler}>Works</NavLink>
                    </div>
                    <div className={s.navItem}>
                        <NavLink onMouseEnter={textEnter} onMouseLeave={textLeave} to={'/contact'} className={({isActive}) => isActive ? s.activeLink : ''} onClick={toggleMenuHandler}>Contacts</NavLink>
                    </div>
                </div>
                <span >© 2023 All rights reserved</span>
            </div>
        </div>
    );
};

export default Sidebar;