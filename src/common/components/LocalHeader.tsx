import React from 'react';
import s from './LocalHeader.module.scss'

type PropsType = {
    title: string
    description: string
}

const LocalHeader: React.FC<PropsType> = ({description, title}) => {
    return <div className={s.header}>
        <span>{title}</span>
        <h1>{description}</h1>
    </div>
}
export default LocalHeader;