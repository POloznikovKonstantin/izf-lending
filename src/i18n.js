import en from './Locales/en.json';
import ru from './Locales/ru.json';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
    EN: {
        translation: en
    },
    RU: {
        translation: ru
    }
}

i18next
.use(initReactI18next)
.init({
    resources,
    lng: JSON.parse(localStorage.getItem('language')),
    fallbackLng: 'en'
})

export default i18next;