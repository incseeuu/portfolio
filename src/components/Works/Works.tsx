import React from 'react';
import s from './Works.module.scss'
import LocalHeader from "../../common/components/LocalHeader";
import sn from '../../assets/social-network.jpg';
import pizza from '../../assets/pizza.jpg';
import todo from '../../assets/todo.jpg';
import bot from '../../assets/bot.webp';
import Work from './Work/Work';
import {motion} from "framer-motion";


const Works = () => {
    return (
        <motion.div
            className={s.container}
            // animate={{opacity: 1, scale: 1}}
            // exit={{opacity: 0, scale: 0.5}}
            // transition={{duration: 1, ease: 'circIn'}}
            initial={{x: 300}}
            animate={{x: 0}}
            exit={{opacity: 0, transition: {duration: 0.2}}}
            transition={{duration: 1}}
        >
            <div className={s.content}>
                <LocalHeader title={'WORKS'} description={'What I Did'} />
                <div className={s.works}>
                    <Work title={'Social Network'}
                          path={'https://github.com/incseeuu/socialNetwork-TS'}
                          src={sn}
                    />
                    <Work title={'Pizza E-Commerce'}
                          path={'https://github.com/incseeuu/pizza-react-ts'}
                          src={pizza}
                    />
                    <Work title={'Todo List'}
                          path={'https://github.com/incseeuu/todoList-React-TS'}
                          src={todo}
                    />
                    <Work title={'Music Discord Bot'}
                          path={'https://github.com/incseeuu/musicBot-DiscordJs'}
                          src={bot}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Works;