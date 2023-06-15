//Config
import {useTranslation} from "react-i18next";

//Hooks
import { useRef } from "react";

//Components
import { Link } from "./Links";

//IMG
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    //Traducciones
    const [t, i18n] = useTranslation("global");

    const navRef = useRef();
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <div className="nav">
            <h3>Green Freaks</h3>
            <nav className="nav__links" ref={navRef}>
                <Link
                    link = '#'
                    text= {t("navbar.inicio")}
                    target = {false}
                />  
                <Link
                    link = '#proyectosFrontend'
                    text= {t("navbar.proyectos")}
                    target = {false}
                /> 
                <Link
                    link = '#titulosCertificaciones'
                    text= {t("navbar.certificaciones")}
                    target = {false}
                />
                <Link
                    link = '#experiencia'
                    text= {t("navbar.experiencia")}
                    target = {false}
                />
                <Link
                    link = '#contacto'
                    text= {t("navbar.contacto")}
                    target = {false}
                />
                <span><button onClick ={()=>i18n.changeLanguage("es")}>{t("navbar.languageEs")}</button> / <button onClick ={()=>i18n.changeLanguage("en")}>{t("navbar.languageEn")}</button></span>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}> <FaTimes/> </button>    
            </nav>
            <button className="nav-btn" onClick={showNavbar}> <FaBars/> </button>
        </div>
    )
}

export default Navbar;