import React from 'react';
import {useLocalStorage} from './hooks';
import { Header } from './Components/Header/Header';
import { useTranslation } from 'react-i18next';
import { Card } from './Components/UI/Card/Card.jsx';

export const App = () => {
  const {i18n} = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'en');

  const changeLanguage = (newLng) => {
    setLanguage(newLng);
    i18n.changeLanguage(newLng);
  }


  return (
    <main className='container'>
        <Header lng={language} changeLng={changeLanguage}/>
    </main>
  )
}
