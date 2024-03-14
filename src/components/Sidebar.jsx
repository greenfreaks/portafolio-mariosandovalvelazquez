const Sidebar = () =>{
    <section className="sidebar">
        <div className="sidebar--language">
            <div className="sidebar--language--buttons">
                <button className="sidebar--langugage--buttons-es">Es</button> <p>/</p> <button className="sidebar--langugage--buttons-en">En</button>
            </div>
            <div className="sidebar--menu">
                <ul>
                    <li><a className="sidebar--menu-option">Inicio</a> <div className="sidebar--menu--line"></div></li>
                    <li><a className="sidebar--menu-option">Experiencia</a> <div className="sidebar--menu--line"></div></li>
                    <li><a className="sidebar--menu-option">Proyectos</a> <div className="sidebar--menu--line"></div></li>
                    <li><a className="sidebar--menu-option">Certificaciones</a> <div className="sidebar--menu--line"></div></li>
                </ul>
            </div>
        </div>
    </section>
}

export default Sidebar;