import React from 'react';
import s from './About.module.scss'
import LocalHeader from "../../common/components/LocalHeader/LocalHeader";
import {motion} from "framer-motion";

const About = () => {
    return (
        <motion.div
            className={s.container}
            // initial={{x: -500, opacity: 0, scale: 0.5}}
            initial={{x: 300}}
            animate={{x: 0}}
            exit={{opacity: 0, transition: {duration: 0.2}}}
            transition={{duration: 1}}
        >
            <div className={s.content}>
                <LocalHeader title={'ABOUT ME'} description={'What About Me'} />
                <div className={s.photoBlock}>
                    <img/>
                    <h2>Alexander Taturevich</h2>
                    <span>Frontend Developer</span>
                </div>
                <div className={s.description}>Hi, my name is Alexander Taturevich and I am a Frontend developer.
                    Half a year ago I started training for web development. My main set of technologies is React and Redux.
                    I strive to create large-scale user interfaces for web applications from different areas of life,
                    which will be able to exist on their own without support for several years.
                </div>
                <div className={s.about}>
                    <div className={s.personalData}>
                        <ul className={s.key}>
                            <li>Birthday:</li>
                            <li>Age:</li>
                            <li>Address:</li>
                            <li>Email:</li>
                            <li>Phone:</li>
                        </ul>
                        <ul className={s.value}>
                            <li>18.02.1998</li>
                            <li>25</li>
                            <li>Rostov-On-Don, Russian Federation</li>
                            <li>alexandr.taturevich@gmail.com</li>
                            <li>+7 959 188 07 25</li>
                        </ul>
                    </div>
                    <div className={s.personalDataTwo}>
                        <ul className={s.key}>
                            <li>Nationality:</li>
                            <li>Study:</li>
                            <li>Degree:</li>
                            <li>Interest:</li>
                            <li>Freelance:</li>
                        </ul>
                        <ul className={s.value}>
                            <li>Ukraine</li>
                            <li>East Ukrainian National University</li>
                            <li>Bachelor</li>
                            <li>Playing Football</li>
                            <li>Available</li>
                        </ul>
                    </div>
                </div>
                <div className={s.education}>
                    <h3>Education</h3>
                    <div className={s.educationList}>
                        <ul>
                            <li>
                                <div className={s.listInner}>
                                    <div className={s.time}>2015-2019</div>
                                    <div className={s.place}>
                                        <h3>East Ukrainian National University</h3>
                                        <span>Bachelor Degree</span>
                                    </div>

                                </div>
                                <div className={s.listInner}>
                                    <div className={s.time}>2022-2023</div>
                                    <div className={s.place}>
                                        <h3>It-Incubator</h3>
                                        <a href={'https://it-incubator.io/education/front-end'}>Frontend Developer</a>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;