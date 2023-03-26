import React, {useContext} from 'react';
import s from "./Work.module.scss";
import {CursorContext} from "../../../App";

type PropsType = {
    title: string
    path: string
    src: string
}

const Work: React.FC<PropsType> = ({title,path,src}) => {
    const {textEnter, textLeave} = useContext(CursorContext)

    return (
        <div className={s.work} onMouseEnter={textEnter} onMouseLeave={textLeave}>
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