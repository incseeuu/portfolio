import React from 'react';
import s from './Works.module.scss'
import LocalHeader from "../../common/components/LocalHeader/LocalHeader";
import sn from '../../assets/social-network.jpg';
import pizza from '../../assets/pizza.jpg';
import todo from '../../assets/todo.jpg';
import bot from '../../assets/bot.webp';
import Work from './Work/Work';
import {motion} from "framer-motion";

const stateForWork = [
    {id: 1, title:'Social Network', path:'https://github.com/incseeuu/socialNetwork-TS',src: sn},
    {id: 2, title:'Pizza E-Commerce', path:'https://github.com/incseeuu/pizza-react-ts',src: pizza},
    {id: 3, title:'Todo List', path:'https://github.com/incseeuu/todoList-React-TS',src: todo},
    {id: 4, title:'Music Discord Bot', path:'https://github.com/incseeuu/musicBot-DiscordJs',src: bot},
]

const Works = () => {

    return (
        <motion.div
            className={s.container}
            initial={{x: 300}}
            animate={{x: 0}}
            exit={{opacity: 0, transition: {duration: 0.2}}}
            transition={{duration: 1}}
        >
            <div className={s.content}>
                <LocalHeader title={'WORKS'} description={'What I Did'} />
                <div className={s.works}>
                    {stateForWork.map(el => {
                        return (
                            <Work key={el.id} title={el.title} path={el.path} src={el.src} />
                        )
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default Works;