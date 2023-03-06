import React, { CSSProperties } from 'react';
import s from './Skills.module.scss'
import Technology from "./Technology/Technology";
import LocalHeader from "../../common/components/LocalHeader";

const Skills = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <LocalHeader title={'SKILLS'} description={'What I Know'}/>
                <div className={s.skills}>
                    <Technology number={1} title={'HTML'}
                                description={'HTML (HyperText Markup Language) is the most basic building block of the Web. ' +
                                    'It defines the meaning and structure of web content.'}
                                path={'https://developer.mozilla.org/en-US/docs/Web/HTML'}
                    />
                    <Technology number={2} title={'CSS'}
                                description={'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document' +
                                    'CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.'}
                                path={'https://developer.mozilla.org/en-US/docs/Web/CSS'}
                    />
                    <Technology number={3} title={'JS'}
                                description={'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.' +
                                    ' While it is most well-known as the scripting language for Web pages.'}
                                path={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'}
                    />
                    <Technology number={4} title={'REACT'}
                                description={'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3]' +
                                    ' for building user interfaces based on components'}
                                path={'https://en.wikipedia.org/wiki/React_(JavaScript_library)'}
                    />
                    <Technology number={5} title={'REDUX'}
                                description={'Redux is an open-source JavaScript library for managing and centralizing application state. ' +
                                    'It is most commonly used with libraries such as React or Angular for building user interfaces'}
                                path={'https://en.wikipedia.org/wiki/Redux_(JavaScript_library)'}
                    />
                    <Technology number={6} title={'REDUX-TOOLKIT'}
                                description={'Redux is an open-source JavaScript library for managing and centralizing application state. ' +
                                    'It is most commonly used with libraries such as React or Angular for building user interfaces'}
                                path={'https://en.wikipedia.org/wiki/Redux_(JavaScript_library)'}/>
                    <Technology number={7} title={'AXIOS'}
                                description={'Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase)... '}
                                path={'https://axios-http.com/docs/intro'}
                    />
                    <Technology number={8} title={'STORYBOOK'}
                                description={'Storybook provides a workshop to build UIs in isolation. ' +
                                    'It helps you develop hard-to-reach states and edge cases without needing to run the whole app.'}
                                path={'https://storybook.js.org/'}
                    />
                    <Technology number={9} title={'JEST'}
                                description={'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.'}
                                path={'https://jestjs.io/'}
                    />
                    <Technology number={10} title={'MATERIAL UI'}
                                description={'MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, ' +
                                    'or bring your own design system to our production-ready components.'}
                                path={'https://mui.com/'}
                    />
                    <Technology number={11} title={'STYLED COMPONENT'}
                                description={'Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components...'}
                                path={'https://styled-components.com/docs'}
                    />
                    <Technology number={12} title={'SASS'}
                                description={'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.'}
                                path={'https://sass-lang.com/'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;