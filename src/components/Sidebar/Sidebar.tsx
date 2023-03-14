import React from 'react';
import s from './Sidebar.module.scss'
import {Link} from "react-router-dom";

type PropsType = {
    toggleMenu: boolean
    callback: (toggleMenu: boolean) => void
}

const Sidebar: React.FC<PropsType> = ({toggleMenu, callback}) => {

    const containerClass = s.container + (toggleMenu ? ' ' + s.active : '')

    return (
        <div className={containerClass}>
            <div className={s.content}>
                <h1>Inc
                    <span>seeuu</span>
                </h1>
                <div className={s.navigation}>
                    <div className={s.navItem}>
                        <Link to={'/'} onClick={() => callback(!toggleMenu)}>Home</Link>
                    </div>
                    <div className={s.navItem} >
                        <Link to={'/about'} onClick={() => callback(!toggleMenu)}>About Me</Link>
                    </div>
                    <div className={s.navItem}>
                        <Link to={'/skills'} onClick={() => callback(!toggleMenu)}>Skills</Link>
                    </div>
                    <div className={s.navItem}>
                        <Link to={'/works'} onClick={() => callback(!toggleMenu)}>Works</Link>
                    </div>
                    <div className={s.navItem}>
                        <Link to={'/contact'} onClick={() => callback(!toggleMenu)}>Contacts</Link>
                    </div>
                </div>
                <span>© 2023 All rights reserved</span>
            </div>
        </div>
    );
};

export default Sidebar;