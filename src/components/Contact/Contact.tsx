import React, {useContext} from 'react';
import s from './Contacts.module.scss'
import LocalHeader from "../../common/components/LocalHeader/LocalHeader";
import {motion} from "framer-motion";
import {CursorContext} from "../../App";

const Contact = () => {

    const {textEnter, textLeave} = useContext(CursorContext)

    return (
        <motion.div
            className={s.container}
            initial={{x: 300}}
            animate={{x: 0}}
            // exit={{opacity: 0, transition: {duration: 0.2}}}
            transition={{duration: 1}}
        >
            <div className={s.content}>
                <LocalHeader title={'CONTACTS'} description={'Get in Touch'} />
                <div className={s.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5418.7229448879325!2d39.7027181!3d47.2290749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3c777c3b4b6ef%3A0x8248b451e48b4d04!2z0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YMsINCg0L7RgdGC0L7QstGB0LrQsNGPINC-0LHQuy4!5e0!3m2!1sru!2sru!4v1678651036354!5m2!1sru!2sru"
                            width="auto"  style={{"border":0}} allowFullScreen={false} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                    <form className={s.form}>
                        <input placeholder={'Name'}/>
                        <input placeholder={'Email'}/>
                        <textarea placeholder={'Message'}/>
                        <button onMouseEnter={textEnter} onMouseLeave={textLeave}>Send Message</button>
                    </form>
            </div>
        </motion.div>
    );
};

export default Contact;