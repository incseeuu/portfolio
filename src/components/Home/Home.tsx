import React from 'react';
import s from './Home.module.scss';
import photoBg from '../../assets/21.jpg'
import {motion} from "framer-motion";
import {Cursor, useTypewriter} from "react-simple-typewriter";


const Home = () => {

    const [text, count] = useTypewriter({
        words: ['I am Frontend developer','Guy-who-loves-coffee.tsx', '<ButLovesToCreateComponentMore/>'],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <motion.div
            className={s.container}
            initial={{x: 300}}
            animate={{x: 0}}
            exit={{opacity: 0, transition: {duration: 0.2}}}
            transition={{duration: 1}}
        >
            <div className={s.leftSide}>
                <div className={s.photo}>
                    <img src={photoBg}/>
                </div>
            </div>
            <div className={s.rightSide}>
                <h1>
                    <span>ALEXANDER</span>
                    <span>TATUREVICH</span>
                </h1>
                <div className={s.containerForSpan}>
                    <span>{text}</span>
                    <Cursor cursorColor='#bbb' cursorBlinking={true}/>
                </div>
                <div className={s.contacts}>
                    <div>
                        <a href={'https://t.me/heathxn'} target='_blank'>
                            <svg className={s.icon} version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                 x="0px"
                                 y="0px"
                                 width="100px" height="100px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
                                <path d="M84.16,14.148l-71.047,29.57c0,0-3.359,1.221-3.099,3.473c0.267,2.256,3.008,3.288,3.008,3.288l17.877,6.382
	c0,0,5.396,18.772,6.458,22.344c1.062,3.562,1.914,3.646,1.914,3.646c0.989,0.456,1.888-0.27,1.888-0.27l11.55-11.169L70.71,86.054
	c4.869,2.253,6.641-2.441,6.641-2.441L90,15.935C90,11.427,84.16,14.148,84.16,14.148z M71.582,78.17L52.324,62.51l-5.976,5.777
	l1.314-12.291l25.67-24.329L38.341,52.441l-15.521-5.54l59.217-24.648L71.582,78.17z"/>
                            </svg>
                        </a>

                    </div>
                    <div>
                        <a href={'https://www.linkedin.com/in/alexander-taturevich-aba77a234/'} target='_blank'>
                            <svg className={s.icon} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 color='white'
                                 viewBox="0 0 50 50">
                                <g id="Layer_1">
                                    <path d="M44,1H6C3.243,1,1,3.243,1,6v38c0,2.757,2.243,5,5,5h38c2.757,0,5-2.243,5-5V6C49,3.243,46.757,1,44,1z M47,44
		c0,1.654-1.346,3-3,3H6c-1.654,0-3-1.346-3-3V6c0-1.654,1.346-3,3-3h38c1.654,0,3,1.346,3,3V44z"/>
                                    <path d="M8,42h8V19H8V42z M10,21h4v19h-4V21z"/>
                                    <path d="M12,7c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S14.757,7,12,7z M12,15c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3
		S13.654,15,12,15z"/>
                                    <path d="M31,19c-1.363,0-2.703,0.308-4,0.916V19h-8v23h8V31c0-2.206,1.794-4,4-4s4,1.794,4,4v11h8V31C43,24.383,37.617,19,31,19z
		 M41,40h-4v-9c0-3.309-2.691-6-6-6s-6,2.691-6,6v9h-4V21h4v2.521l1.561-1.057C27.996,21.493,29.489,21,31,21
		c5.514,0,10,4.486,10,10V40z"/>
                                </g>
                                <g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a href={'https://www.instagram.com/incseeu/'} target='_blank'>
                            <svg className={s.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M10.825091,2 L13.1738932,2 C14.8491598,2.00379146 15.2338099,2.01854561 16.1226982,2.059103 C17.187141,2.10765278
                                  17.9141174,2.27672349 18.5502266,2.52395815 C19.2078518,2.77948955 19.7655588,3.12144192 20.3215589,3.67740233 C20.8775194,4.23340244
                                  21.2194717,4.79110953 21.4750428,5.44873467 C21.7222377,6.08484389 21.8913085,6.81182019 21.9398582,7.87626307 C21.9869049,8.90737346
                                  21.9992305,9.25998097 22,11.7357029 L22,12.2632942 C21.9992305,14.7389803 21.9869049,15.0915878 21.9398582,16.1226982 C21.8913085,17.187141
                                  21.7222377,17.9141174 21.4750428,18.5502266 C21.2194717,19.2078518 20.8775194,19.7655588 20.3215589,20.3215589 C19.7655588,20.8775194
                                  19.2078518,21.2194717 18.5502266,21.4750428 C17.9141174,21.7222377 17.187141,21.8913085 16.1226982,21.9398582 C15.0915878,21.9869049
                                   14.7389803,21.9992305 12.2632942,22 L11.7357029,22 C9.25998097,21.9992305 8.90737346,21.9869049 7.87626307,21.9398582 C6.81182019,21.8913085
                                   6.08484389,21.7222377 5.44873467,21.4750428 C4.79110953,21.2194717 4.23340244,20.8775194 3.67740233,20.3215589 C3.12144192,19.7655588 2.77948955,19.2078518 2.52395815,18.5502266 C2.27672349,17.9141174 2.10765278,17.187141 2.059103,16.1226982 C2.01854561,15.2338099 2.00379146,14.8491598 2,13.1738932 L2,10.825091
                                    C2.00379146,9.14980144 2.01854561,8.76515134 2.059103,7.87626307 C2.10765278,6.81182019 2.27672349,6.08484389 2.52395815,5.44873467 C2.77948955,4.79110953 3.12144192,4.23340244 3.67740233,3.67740233 C4.23340244,3.12144192 4.79110953,2.77948955 5.44873467,2.52395815 C6.08484389,2.27672349 6.81182019,2.10765278 7.87626307,2.059103 C8.76515134,2.01854561 9.14980144,2.00379146 10.825091,2 L13.1738932,2 L10.825091,2 Z M12.733046,3.80115495 L11.2659442,3.80115495 C9.25857953,3.80324073 8.90746344,3.81583469 7.95839674,3.85913648 C6.98335214,3.90359743 6.45383012,4.06651507 6.10143736,4.20347069 C5.63463704,4.38488726 5.30149746,4.60159471 4.95156594,4.95156594 C4.60159471,5.30149746 4.38488726,5.63463704 4.20347069,6.10143736 C4.06651507,6.45383012
                                   3.90359743,6.98335214 3.85913648,7.95839674 C3.81583469,8.90746344 3.80324073,9.25857953 3.80115495,11.2659442 L3.80115495,12.733046 C3.80324073,14.7403818 3.81583469,15.0914978 3.85913648,16.0405646 C3.90359743,17.0156091 4.06651507,17.5451311
                                    4.20347069,17.8975239 C4.38488726,18.3643242 4.60163441,18.6974638 4.95156594,19.0473953 C5.30149746,19.3973665 5.63463704,19.614074 6.10143736,19.7954906 C6.45383012,19.9324462 6.98335214,20.0953638 7.95839674,20.1398247 C9.0127962,20.1879378 9.32902474,20.1981401 11.9995005,20.1981401 C14.6699365,20.1981401 14.9862047,20.1879378 16.0405646,20.1398247 C17.0156091,20.0953638 17.5451311,19.9324462 17.8975239,19.7954906 C18.3643242,19.614074 18.6974638,19.3973665 19.0473953,19.0473953 C19.3973665,18.6974638 19.614074,18.3643242 19.7954906,17.8975239 C19.9324462,17.5451311 20.0953638,17.0156091 20.1398247,16.0405646 C20.1879378,14.986046 20.1981401,14.6697381 20.1981401,11.9995005 C20.1981401,9.32922322 20.1879378,9.0129153 20.1398247,7.95839674
                                     C20.0953638,6.98335214 19.9324462,6.45383012 19.7954906,6.10143736 C19.614074,5.63463704 19.3973665,5.30149746 19.0473953,4.95156594 C18.6974638,4.60159471 18.3643242,4.38488726 17.8975239,4.20347069 C17.5451311,4.06651507 17.0156091,3.90359743 16.0405646,3.85913648 C15.0914978,3.81583469 14.7403818,3.80324073
                                    12.733046,3.80115495 Z M11.9995,6.99920128 C14.7610764,6.99920128 16.99976,9.23788484 16.99976,11.9995 C16.99976,14.7610764 14.7610764,16.99976 11.9995,16.99976 C9.23788484,16.99976 6.99920128,14.7610764 6.99920128,11.9995 C6.99920128,9.23788484 9.23788484,6.99920128 11.9995,6.99920128 Z M11.9995,8.75368323 C10.2068679,8.75368323 8.75368323,10.2068679 8.75368323,11.9995 C8.75368323,13.7920934 10.2068679,15.245278 11.9995,15.245278 C13.7920934,15.245278 15.245278,13.7920934 15.245278,11.9995 C15.245278,10.2068679 13.7920934,8.75368323 11.9995,8.75368323 Z M17.4164293,5.33244149 C18.1068302,5.33244149 18.6665198,5.89213105 18.6665198,6.58253201 C18.6665198,7.27293296 18.1068302,7.83258117 17.4164293,7.83258117 C16.7260697,7.83258117
                                    16.1663801,7.27293296 16.1663801,6.58253201 C16.1663801,5.89213105 16.7260697,5.33244149 17.4164293,5.33244149 Z"/>
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;