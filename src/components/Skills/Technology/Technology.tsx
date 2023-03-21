import React, {forwardRef, ReactNode, Ref} from 'react';
import s from './Technology.module.scss'
import {motion} from "framer-motion";

type PropsType = {
    title: string
    path: string
    children: ReactNode
}

const TextAnimation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.3}
    })
}

const Technology: React.FC<PropsType> = forwardRef(({title, path, children}, ref) => {
    return (
        <motion.div initial="hidden"
                    whileInView="visible"

                    custom={2} variants={TextAnimation}
                    className={s.container}
                    ref={ref as Ref<HTMLDivElement>}>
            <div className={s.header}>
                <h2 className={s.title}>{title}</h2>
                <motion.div  className={s.svg + (title === 'Axios' ? ' ' + s.svgAxios : '') }>{children}</motion.div>
            </div>
            <div className={s.moreWrapper}></div>
            <div className={s.more}>
                <a href={path} target={'_blank'}>READ MORE</a>
            </div>
        </motion.div>
    );
});

export default Technology;

export const MTechnology = motion(Technology)