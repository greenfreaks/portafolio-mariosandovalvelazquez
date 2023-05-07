const Header = () => {
    return (
        <header className="header">
            <div className="header__banner">
                <div className="header__banner--logo">
                    <h1>Mario Sandoval Velázquez</h1>
                    <h2 className="greenTx">Desarrollador Web</h2>
                    <p>El arte y la tecnología son mi pasión.</p> <br />
                    <a href="#navHome" class="lgBtn green whiteTx bold"><b>Descarga mi CV</b></a>
                </div>

                <div class="header__banner--text">
                    <p class="whiteTx">Ingeniero en Tecnologías de la Información con nivel de Inglés B2, <b class="greenTx">me considero un apasionado del desarrollo web,</b> siempre busco generar un buen impacto visual para el usuario y la comodidad de su navegación</p>
                </div>
            </div>
        </header>
    )
}

export default Header;