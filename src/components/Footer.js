import React from 'react';
import "./Footer.scss"
import {useTranslation} from 'react-i18next';


const Footer = ({goToHead}) => {
    const {t, i18n} = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'it' ? 'en' : 'it');
        goToHead();
    };

    return (
        <footer>
            <div className="footer__item">
                <img className="footer__logo" src={require('./../assets/images/logo.png').default} alt={"logo"}/>
            </div>
            <div className="footer__item">
                <a onClick={() => {
                    goToHead()
                }}>Up</a><br/>
                <img className="icon__language" src={require(`../assets/images/${i18n.language === 'it' ? 'italy' : 'usa'}.png`).default} alt={"lng"} onClick={() => changeLanguage()}/>
            </div>
        </footer>
    );
};

export default Footer;
