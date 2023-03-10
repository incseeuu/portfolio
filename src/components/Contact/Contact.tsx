import React from 'react';
import s from './Contacts.module.scss'
import LocalHeader from "../../common/components/LocalHeader";
import {motion} from "framer-motion";

const Contact = () => {
    return (
        <motion.div
            className={s.container}
            initial={{width: 0}}
            animate={{width: '75%'}}
            exit={{x: window.innerWidth, transition: { duration: 1}}}
        >
            <div className={s.content}>
                <LocalHeader title={'CONTACTS'} description={'Get in Touch'} />
                <div className={s.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900.4124705206192!2d39.27610711351997!3d48.56443109899435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411fdac4d193f105%3A0x5e419fc9eeadecca!2z0YPQuy4g0KHQvtCy0LXRgtGB0LrQsNGPLCAxNSwg0JvRg9Cz0LDQvdGB0LosINCb0YPQs9Cw0L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDkxMDAw!5e0!3m2!1sru!2sde!4v1678123626644!5m2!1sru!2sde"
                        width="auto" height="400" style={{"border":0}} allowFullScreen={false} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                    <form className={s.form}>
                        <input placeholder={'Name'}/>
                        <input placeholder={'Email'}/>
                        <textarea placeholder={'Message'}/>
                        <button>Send Message</button>
                    </form>
            </div>
        </motion.div>
    );
};

export default Contact;