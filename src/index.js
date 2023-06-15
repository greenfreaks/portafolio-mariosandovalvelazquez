import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/main.scss';
import App from './App';
import {I18nextProvider, initReactI18next} from "react-i18next"
import i18next from 'i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"

i18next
.use(LanguageDetector)
.use(initReactI18next)
.init({
    interpolation: {escapeValue: false},
    resources:{
        es:{
            global: global_es,
        },
        en:{
            global: global_en,
        },
    }
})
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <I18nextProvider i18n ={i18next}>
        <App />
    </I18nextProvider>
);

// reportWebVitals();
