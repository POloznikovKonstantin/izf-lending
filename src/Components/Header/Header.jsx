import React from 'react'
import { useTranslation } from 'react-i18next';

import './Header.css';
import { logoGGP } from '../../assets';

export const Header = () => {
    const {t, i18n} = useTranslation();
    // const [language, setLanguage] = useLocalStorage('language', 'en');


    return (
        <div className='header-main'>
            <div>
                <img src={logoGGP} alt='logo'/>
            </div>

            <nav>
                <a className='paragraph-text item-link' href='/#'>
                    {t("Header.ButtonHome")}
                </a>

                <a className='paragraph-text item-link' href='/#'>
                    {t("Header.ButtonProjects")}
                </a>

                <a className='paragraph-text item-link' href='/#'>
                    {t("Header.ButtonExperience")}    
                </a>
            </nav>

            <div>
                <p>EN</p>
            </div>
        </div>
    )
}
