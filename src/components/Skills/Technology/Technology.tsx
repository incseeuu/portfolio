import React, {FunctionComponent, ReactNode, SVGProps} from 'react';
import s from './Technology.module.scss'

type PropsType = {
    title: string
    path: string
    children: ReactNode
}

const Technology: React.FC<PropsType> = ({title, path, children}) => {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <h2 className={s.title}>{title}</h2>
                <div className={s.svg + (title === 'Axios' ? ' ' + s.svgAxios : '') }>{children}</div>
            </div>
            <div className={s.moreWrapper}></div>
            <div className={s.more}>
                <a href={path} target={'_blank'}>READ MORE</a>
            </div>
        </div>
    );
};

export default Technology;