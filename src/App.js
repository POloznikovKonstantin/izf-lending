import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from './hooks';

export const App = () => {
  const {t, i18n} = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'en');


  const changeRu = () => {
    i18n.changeLanguage('RU');
    setLanguage('RU');
    window.location.reload();
  }

  const changeEn = () => {
    i18n.changeLanguage('EN');
    setLanguage('EN');
    window.location.reload();
  }

  return (
    <main>
        <button onClick={changeEn}>EN</button>
        <button onClick={changeRu}>RU</button>

        {language}

        <hr/>

        {t('Welocome React')}
    </main>
  )
}
