import React, {useContext} from 'react';
import s from './Contacts.module.scss'
import LocalHeader from "../../common/components/LocalHeader/LocalHeader";
import {motion} from "framer-motion";
import {CursorContext} from "../../App";
import {useForm, SubmitHandler} from "react-hook-form";
import axios from "axios";


type Inputs = {
    name: string
    email: string
    message: string
};

const TOKEN = '5914275737:AAEO20lzhC9D3K38oJ8qi5wy9xl24XJjxyU'
const CHAT_ID = '-1001919947997'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

const Contact = () => {

    const [success, setSuccess] = React.useState(false)

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<Inputs>({
        mode: "onBlur"
    });
    const onSubmit: SubmitHandler<Inputs> = data => {
        let message = `<b>Обратная связь из Portfolio</b>\n
          <b>Name: ${data.name}</b>\n
          <b>Email: ${data.email}</b>\n
          <b>Message: ${data.message}</b>`
        axios.post(URI_API, {chat_id: CHAT_ID, parse_mode: 'html', text: message})
            .then(_ => {
                setSuccess(true)
            })
        reset()
    }

    React.useEffect(() => {
        setTimeout(()=>{
            setSuccess(false)
        }, 2000)
    }, [success])

    const {textEnter, textLeave} = useContext(CursorContext)

    return (
        <motion.div
            className={s.container}
            initial={{x: 300}}
            animate={{x: 0}}
            transition={{duration: 1}}
        >
            <div className={s.content}>
                <LocalHeader title={'CONTACTS'} description={'Get in Touch'}/>
                <div className={s.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5418.7229448879325!2d39.7027181!3d47.2290749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3c777c3b4b6ef%3A0x8248b451e48b4d04!2z0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YMsINCg0L7RgdGC0L7QstGB0LrQsNGPINC-0LHQuy4!5e0!3m2!1sru!2sru!4v1678651036354!5m2!1sru!2sru"
                        width="auto" style={{"border": 0}} allowFullScreen={false} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder={'Name'} {...register('name')}/>
                    <input placeholder={'Email'} {...register('email', {
                        required: "Поле обязательное к заполнению",
                        pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Неверно указан email адрес'}
                    })}/>
                    {errors?.email ? <span className={s.error}>{errors.email?.message}</span> : false}
                    <textarea placeholder={'Message'} {...register('message')}/>
                    <button onMouseEnter={textEnter} onMouseLeave={textLeave}>Send Message</button>
                    {success && <div className={s.success}>Сообщение успешно отправлено :)</div>}
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;