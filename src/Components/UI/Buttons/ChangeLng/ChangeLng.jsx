import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RU, EN } from '../../../../assets';

import './ChangeLng.css';


export const ChangeLng = ({children, changeLng}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div 
            className={isActive ? 'change-lng-active' : 'change-lng'} 
            onClick={() => setIsActive(!isActive)}
        >
            <div className='change-lng__content'>
                <p className='paragraph-text change-lng__p'>{children}</p>

                {
                    children === 'RU'? 
                        <img src={RU} alt='RU'/> 
                    : 
                        <img src={EN} alt='RU'/>
                }
            </div>

            {
                isActive && (
                    <AnimatePresence initial={isActive}>
                        <motion.div 
                            initial={{y: -10, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -10, opacity: 0}}
                            transition={{duration: 0.3}}
                            style={{
                                position: 'absolute',
                                left: -2,
                                right: -2,
                                backgroundColor: 'var(--background-black)',
                                overflow: 'hidden'
                            }}>
                            {
                                children === 'RU'?
                                    <div 
                                        className='change-lng__active-menu'
                                        onClick={() => changeLng('EN')}
                                    >
                                        <p className='paragraph-text change-lng__p'>EN</p>
                                        <img src={EN} alt='RU'/>
                                    </div>
                                :
                                    <div 
                                        className='change-lng__active-menu'
                                        onClick={() => changeLng('RU')}
                                    >
                                        <p className='paragraph-text change-lng__p'>RU</p>
                                        <img src={RU} alt='RU'/>
                                    </div>
                            }
                        </motion.div>
                    </AnimatePresence>
                )
            }
        </div>
    )
}
