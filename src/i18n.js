import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            bannerText1: "We provide a planning services and specific advice",
            bannerText2: "for international small and big companies",
            contactUs: "Contact Us",
            aboutUs: "About",
            projects: "Projects",
            contacts: "Contacts",
            links: "Links",
            italy: "Italy",
            send: "Send",
            address: "Address",
            solutions: "Solutions"
        }
    },
    it: {
        translation: {
            bannerText1: "Forniamo un servizio di progettazione e consulenza su specifica",
            bannerText2: "per piccole e grandi aziende, italiane ed internazionali",
            contactUs: "Contattaci",
            aboutUs: "Chi siamo",
            projects: "Progetti",
            contacts: "Contatti",
            links: "Collegamenti",
            italy: "Italia",
            send: "Invia",
            address: "Indirizzo",
            solutions: "Indirizzo"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "it",
        fallbackLng: "en",
        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
