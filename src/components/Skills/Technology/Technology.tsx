import React from 'react';
import s from './Technology.module.scss'

type PropsType = {
    number: number
    title: string
    description: string
    path: string
}

const Technology: React.FC<PropsType> = ({title, description, number, path}) => {
    return (
        <div className={s.container}>
            <div className={s.number}>
                <span>{number < 10 ? '0' + number : number }</span>
            </div>
            <div className={s.title}>{title}</div>
            <div className={s.description}>{description}</div>
            <div className={s.moreWrapper}></div>
            <div className={s.more}>
                <a href={path} target={'_blank'}>READ MORE</a>
            </div>
        </div>
    );
};

export default Technology;