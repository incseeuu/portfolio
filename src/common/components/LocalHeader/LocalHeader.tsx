import React from 'react';
import s from './LocalHeader.module.scss'
import {motion} from "framer-motion";

type PropsType = {
    title: string
    description: string
}

export const TextAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3}
    })
}

const LocalHeader: React.FC<PropsType> = ({description, title}) => {

    return <motion.div
        initial="hidden"
        whileInView="visible"
        className={s.header}>

        <motion.span custom={1} variants={TextAnimation}>{title}</motion.span>
        <motion.h1 custom={2} variants={TextAnimation}>{description}</motion.h1>
    </motion.div>
}
export default LocalHeader;