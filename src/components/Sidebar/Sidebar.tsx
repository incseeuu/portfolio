import React from 'react';
import s from './Sidebar.module.scss'
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <h1>Inc
                    <span>seeuu</span>
                </h1>
                <div className={s.navigation}>
                    <div className={s.navItem}>
                        <Link to={'/'}>Home</Link>
                    </div>
                    <div className={s.navItem}>
                        <Link to={'/about'}>About Me</Link>
                    </div>
                    <div className={s.navItem}>
                        <Link to={'/skills'}>Skills</Link>
                    </div>
                    <div className={s.navItem}>
                        <Link to={'/works'}>Works</Link>
                    </div>
                    <div className={s.navItem}>
                        <Link to={'/contact'}>Contacts</Link>
                    </div>
                </div>
                <span>© 2023 All rights reserved</span>
            </div>
        </div>
    );
};

export default Sidebar;