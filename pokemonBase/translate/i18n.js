import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'; 
import ptBR from './br.json';

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'pt-BR',
    resources:{
        'pt-BR': ptBR
    },
    react: {
        useSuspense: false
    },
    interpolation: {
        escapeValue: false
    }
})

export default i18n;