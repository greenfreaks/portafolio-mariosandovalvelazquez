//Hooks
import { useRef } from "react";

//Components
import { Link } from "./Links";

//IMG
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

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
                    text= 'Inicio'
                    target = {false}
                />  
                <Link
                    link = '#proyectosFrontend'
                    text= 'Proyectos'
                    target = {false}
                /> 
                <Link
                    link = '#titulosCertificaciones'
                    text= 'Certificaciones'
                    target = {false}
                />
                <Link
                    link = '#experiencia'
                    text= 'Experiencia'
                    target = {false}
                />
                <Link
                    link = '#contacto'
                    text= 'Contacto'
                    target = {false}
                />
                <span><button>ES</button> / <button>EN</button></span>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}> <FaTimes/> </button>    
            </nav>
            <button className="nav-btn" onClick={showNavbar}> <FaBars/> </button>
        </div>
    )
}

export default Navbar;