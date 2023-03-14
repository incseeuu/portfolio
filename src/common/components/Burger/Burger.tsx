import React from 'react';
import s from './Burger.module.scss'

type PropsType = {
    callback: (toggleMenu: boolean) => void
    value: boolean
}

const Burger: React.FC<PropsType> = ({callback, value}) => {

    return (
            <div onClick={() => callback(!value)} className={s.menuToggle} >
                <input type="checkbox" />
                <span className={!value ? s.active : ''}></span>
                <span className={!value ? s.active : ''}></span>
                <span className={!value ? s.active : ''}></span>
            </div>
    );
};

export default Burger;