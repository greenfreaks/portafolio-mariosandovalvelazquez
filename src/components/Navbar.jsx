const Navbar = () => {
    return (
        <nav id="navHome" class="header__nav">
            <div class=" header__nav--logo">
                <h6><a href="" class="noDecoration greenTx boldTx">GREEN FREAKS</a></h6>
            </div>
            <ul class="header__nav--content noList">
                <li><a href="#" class="noDecoration active whiteTx boldTx">Inicio</a></li>
                <li><a href="sections/slider_web.html" class="noDecoration whiteTx boldTx">Servicios</a></li>
                <li><a href="sections/contacto.html" class="noDecoration whiteTx boldTx">Contacto</a></li>
                <ul class="noList">
                    <li><a href="" class="noDecoration whiteTx">EN</a> <b>/</b>
                        <a href="" class="noDecoration whiteTx">ES</a></li>
                </ul>
            </ul>
            <div class="header__nav--burger">
                <div class="header__nav--burger-1"></div>
                <div class="header__nav--burger-2"></div>
                <div class="header__nav--burger-3"></div>
            </div>
        </nav>
    )
}

export default Navbar;