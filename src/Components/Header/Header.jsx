import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

import { RU, EN, logoGGP, modileMenu } from '../../assets';
import { ChangeLng } from '../UI/Buttons/ChangeLng/ChangeLng';

import './Header.css';

export const Header = ({lng, changeLng}) => {
    const {t} = useTranslation();
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <header className='header-main'>
                <div className='header-content'>
                    <div>
                        <img src={logoGGP} alt='logo'/>
                    </div>

                    <nav className='header-nav'>
                        <a className='paragraph-text header-nav__item-link' href='/#'>
                            {t("Header.ButtonHome")}
                        </a>

                        <a className='paragraph-text header-nav__item-link' href='/#'>
                            {t("Header.ButtonProjects")}
                        </a>

                        <a className='paragraph-text header-nav__item-link' href='/#'>
                            {t("Header.ButtonExperience")}    
                        </a>
                    </nav>

                    <div className='header-change-lng'>
                        <ChangeLng changeLng={changeLng}>
                            {lng}
                        </ChangeLng>
                    </div>

                    <div className='header-button-menu' onClick={() => setIsActive(!isActive)}>
                        <img src={modileMenu} alt=''/>
                    </div>
                </div>

                <AnimatePresence initial={isActive}>
                    {
                        isActive && (
                            <motion.nav
                                initial={{y: -10, opacity: 0}}
                                animate={{y: '50%', opacity: 1}}
                                exit={{y:-10, opacity: 0}}
                                transition={{duration: 0.5}}
                                style={{overflow: 'hidden', height:'100vh'}}
                            >
                                <a className='header-nav__mobile-item' href='/#'>
                                    {t("Header.ButtonHome")}
                                </a>

                                <a className='header-nav__mobile-item' href='/#'>
                                    {t("Header.ButtonProjects")}
                                </a>

                                <a className='header-nav__mobile-item' href='/#'>
                                    {t("Header.ButtonExperience")}    
                                </a>

                                <div className='header-nav__mobile-chage-lng'>
                                    <div 
                                        className='header-nav__mobile-chage-item'
                                        onClick={() => changeLng('RU')}
                                    >
                                        <p>RU</p>
                                        <img src={RU} alt=''/>
                                    </div>
                                    <div 
                                        className='header-nav__mobile-chage-item'
                                        onClick={() => changeLng('EN')}
                                    >
                                        <p>EN</p>
                                        <img src={EN} alt=''/>
                                    </div>
                                </div>
                            </motion.nav>
                        )
                    }   
                </AnimatePresence>
            </header>
        </>
    )
}
