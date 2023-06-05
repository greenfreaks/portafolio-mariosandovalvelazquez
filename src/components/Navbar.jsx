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
                    link = '#'
                    text= 'Proyectos'
                    target = {false}
                /> 
                <Link
                    link = '#'
                    text= 'Certificaciones'
                    target = {false}
                />
                <Link
                    link = '#'
                    text= 'Contacto'
                    target = {false}
                />
                <button className="nav-btn nav-close-btn" onClick={showNavbar}> <FaTimes/> </button>    
            </nav>
            <button className="nav-btn" onClick={showNavbar}> <FaBars/> </button>
        </div>
    )
}

export default Navbar;