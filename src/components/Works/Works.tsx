import React from 'react';
import s from './Works.module.scss'
import LocalHeader from "../../common/components/LocalHeader";
import sn from '../../assets/social-network.jpg';
import pizza from '../../assets/pizza.jpg';
import todo from '../../assets/todo.jpg';
import bot from '../../assets/bot.webp';
import Work from './Work/Work';


const Works = () => {
    return (
        <div className={s.container}>
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
        </div>
    );
};

export default Works;