import React, {CSSProperties, useEffect} from 'react';
import s from './Skills.module.scss'
import {MTechnology} from "./Technology/Technology";
import LocalHeader from "../../common/components/LocalHeader/LocalHeader";
import {motion} from "framer-motion";
import {ReactComponent as Axios} from "../../assets/axios2.svg";
import {ReactComponent as Html} from "../../assets/html-1.svg";
import {ReactComponent as Css} from "../../assets/css-3.svg";
import {ReactComponent as JS} from "../../assets/logo-javascript.svg";
import {ReactComponent as ReactJS} from "../../assets/react-2.svg";
import {ReactComponent as Redux} from "../../assets/redux.svg";
import {ReactComponent as Jest} from "../../assets/jest.svg";
import {ReactComponent as MaterialUI} from "../../assets/material-ui-1.svg";
import {ReactComponent as Styled} from "../../assets/styled-components-1.svg";
import {ReactComponent as SASS} from "../../assets/sass-1.svg";
import {ReactComponent as Storybook} from "../../assets/storybook.svg";
import {ReactComponent as TS} from "../../assets/typescript-2.svg";

const stateForTechnology = [
    {id: 1, title: 'HTML', path: 'https://developer.mozilla.org/en-US/docs/Web/HTML',svg: <Html/>},
    {id: 2, title: 'CSS', path: 'https://developer.mozilla.org/en-US/docs/Web/CSS',svg: <Css/>},
    {id: 3, title: 'JavaScript', path: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',svg: <JS/>},
    {id: 4, title: 'TypeScript', path: 'https://www.typescriptlang.org/',svg: <TS/>},
    {id: 5, title: 'React', path: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)',svg: <ReactJS/>},
    {id: 6, title: 'Redux', path: 'https://en.wikipedia.org/wiki/Redux_(JavaScript_library)',svg: <Redux/>},
    {id: 7, title: 'Redux-Toolkit', path: 'https://en.wikipedia.org/wiki/Redux_(JavaScript_library)',svg: <Redux/>},
    {id: 8, title: 'Axios', path: 'https://axios-http.com/docs/intro',svg: <Axios/>},
    {id: 9, title: 'Storybook', path: 'https://storybook.js.org/',svg: <Storybook/>},
    {id: 10, title: 'JEST', path: 'https://jestjs.io/',svg: <Jest/>},
    {id: 11, title: 'Material UI', path: 'https://mui.com/',svg: <MaterialUI/>},
    {id: 12, title: 'Styled Component', path: 'https://styled-components.com/docs',svg: <Styled/>},
    {id: 13, title: 'SASS', path: 'https://sass-lang.com/',svg: <SASS/>}
]

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

const Skills = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <motion.div
            className={s.container}
            // initial={{x: 300}}
            // animate={{x: 0}}
            // exit={{opacity: 0, transition: {duration: 0.2}}}
            // transition={{duration: 1}}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0}}
        >
            <div className={s.content}>
                <LocalHeader title={'SKILLS'} description={'What I Know'}/>
                <div className={s.skills}>
                    {stateForTechnology.map((el, index) => {
                        return (
                            <MTechnology custom={index + 1} variants={TextAnimation} key={el.id} title={el.title} path={el.path} children={el.svg} />
                        )
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;