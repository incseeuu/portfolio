import React, {useContext} from 'react';
import s from './Sidebar.module.scss'
import {NavLink} from "react-router-dom";
import {ThemeContext} from "../../App";
import useWindowDimensions from '../../hooks/windowDimensions';

type PropsType = {
    toggleMenu: boolean
    callback: (toggleMenu: boolean) => void
}

const Sidebar: React.FC<PropsType> = ({toggleMenu, callback}) => {

    const { height, width } = useWindowDimensions()
    console.log(height, width)

    const {theme} = useContext(ThemeContext)

    const containerClass = s.container + (!toggleMenu ? ' ' + s.active : '')
    console.log(toggleMenu)

    const toggleMenuHandler = () => {
        width && width < 913 && callback(false)
    }

    return (
        <div className={containerClass} id={theme}>
            <div className={s.content}>
                <h1 id={theme}>Inc
                    <span id={theme}>seeuu</span>
                </h1>
                <div id={theme} className={s.navigation}>
                    <div className={s.navItem}>
                        <NavLink to={'/'} className={({isActive}) => isActive ? s.activeLink : ''} onClick={toggleMenuHandler} >Home</NavLink>
                    </div>
                    <div className={s.navItem} >
                        <NavLink to={'/about'} className={({isActive}) => isActive ? s.activeLink : ''} onClick={toggleMenuHandler}>About Me</NavLink>
                    </div>
                    <div className={s.navItem}>
                        <NavLink to={'/skills'} className={({isActive}) => isActive ? s.activeLink : ''} onClick={toggleMenuHandler}>Skills</NavLink>
                    </div>
                    <div className={s.navItem}>
                        <NavLink to={'/works'} className={({isActive}) => isActive ? s.activeLink : ''} onClick={toggleMenuHandler}>Works</NavLink>
                    </div>
                    <div className={s.navItem}>
                        <NavLink to={'/contact'} className={({isActive}) => isActive ? s.activeLink : ''} onClick={toggleMenuHandler}>Contacts</NavLink>
                    </div>
                </div>
                <span id={theme}>© 2023 All rights reserved</span>
            </div>
        </div>
    );
};

export default Sidebar;