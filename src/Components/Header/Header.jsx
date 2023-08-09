import React from 'react'
import { useTranslation } from 'react-i18next';
// import { useLocalStorage } from '../hooks';
import headerStyle from './Header.module.css';

export const Header = () => {
    const {t, i18n} = useTranslation();
    // const [language, setLanguage] = useLocalStorage('language', 'en');


    return (
        <header className={headerStyle.header_main}>
            <div>

            </div>

            <div>
                <a className='paragraph-text' href='/#'>
                    {t("Header.ButtonHome")}
                </a>

                <a className='paragraph-text' href='/#'>
                    {t("Header.ButtonProjects")}
                </a>

                <a className='paragraph-text' href='/#'>
                    {t("Header.ButtonExperience")}    
                </a>
            </div>

            <div>

            </div>
        </header>
    )
}
