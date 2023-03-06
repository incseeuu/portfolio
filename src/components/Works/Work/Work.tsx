import React from 'react';
import s from "./Work.module.scss";

type PropsType = {
    title: string
    path: string
    src: string
}

const Work: React.FC<PropsType> = ({title,path,src}) => {
    return (
        <div className={s.work}>
            <div className={s.shadow}></div>
            <img  src={src}/>
            <div className={s.view}>
                <h2>{title}</h2>
                <a href={path} target={'_blank'}>View</a>
            </div>
        </div>
    );
};

export default Work;