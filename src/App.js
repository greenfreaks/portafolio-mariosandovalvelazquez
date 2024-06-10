//Config
import {useTranslation} from "react-i18next";

//Externals
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Titulo from './components/Titulo';
import { Link, LinkImg } from './components/Links';
import Certifications from './components/Certifications';
import {CardImg, CardVid, CardYt} from './components/Cards';


//imgs
import HTML from './assets/img/html.png';
import CSS from './assets/img/css.png';
import SASS from './assets/img/sass.png';
import JS from './assets/img/js.png';
import REACT from './assets/img/react.png';
import JQUERY from './assets/img/jquery.png';
import GITHUB from './assets/img/github.png';
import PUG from './assets/img/pug.png';
import PHP from './assets/img/php.png';
import MYSQL from './assets/img/mysql.png';
import GREENSOCK from './assets/img/greensock.png';
import FotoMario from './assets/img/fotoMario.png'; 
import Linkedin from './assets/img/linkedin.png'; 
import Gmail from './assets/img/gmail.png'; 
import GithubSocial from './assets/img/githubSocial.png';
import Utvam from './assets/img/utvam.png';
import Coderhouse from './assets/img/coderhouse.png';
import Itep from './assets/img/itep.png';
import Alura from './assets/img/alura.png';
import Voxy from './assets/img/voxy.png';
import FrontTbr from './assets/img/front_tbr.png';
import FrontAmevitec from './assets/img/front_amevitec.png';
import FrontLeccionesVuelo from './assets/img/front_leccionesVuelo.png';
import FrontTolko from './assets/img/front_tolko.png';
import front_tolkoProducciones from './assets/img/front_tolkoProducciones.png';
import FrontAmsofipo from './assets/img/front_amsofipo.png';
import FrontNave from './assets/img/front_nave.png';
import FrontMatriz from './assets/img/front_matriz.png';


function App() {
  //Translations
  const {t, i18n} = useTranslation("global");
  //Carousel Break points
  const breakPoints =[
    {width: 1, itemsToShow: 1},
    {width: 768, itemsToShow: 2},
    {width: 1500, itemsToShow: 3},
    
]
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <main>
        <div className='space'></div>
        <section className='tecnologias'>
          <Titulo texto= {t("app.tecnologias.sectionTitle")}/>
            <div className='tecnologias__img sectionContent'>
              <img src={HTML} alt='HTML' title='HTML'></img>
              <img src={CSS} alt='CSS' title='CSS'></img>
              <img src={SASS} alt='SASS' title='SASS'></img>
              <img src={JS} alt='JS' title='JS'></img>
              <img src={REACT} alt='REACT' title='REACT'></img>
              <img src={JQUERY} alt='JQUERY' title='JQUERY'></img>
              <img src={GITHUB} alt='GITHUB' title='GITHUB'></img>
              <img src={PUG} alt='PUG JS' title='PUG JS'></img>
              <img src={PHP} alt='PHP' title='PHP'></img>
              <img src={MYSQL} alt='MYSQL' title='MYSQL'></img>
              <img src={GREENSOCK} alt='GSAP' title='GSAP'></img>
            </div>
        </section>

        <div id='proyectosFrontend' className='space'></div>
        <section className='proyectosFrontend'>
          <Titulo texto= {t("app.proyectosFrontend.sectionTitle")} />
          <div className='sectionContent'>
            <Carousel breakPoints={breakPoints}>
              <CardImg 
              img={front_tolkoProducciones} 
              imgAlt="Página Tolko Produccionees" 
              imgTitle="Tolko Producciones" 
              cardTitle= {t("app.proyectosFrontend.carousel.tolkoProducciones.cardTitle")} 
              text = {t("app.proyectosFrontend.carousel.tolkoProducciones.text")}
              btnLink='https://tolkoproducciones.com/' 
              btnText={t("app.proyectosFrontend.carousel.tolkoProducciones.btn")}
              btnBlank = {true}
              />
              
              <CardImg 
              img={FrontAmevitec} 
              imgAlt="Sitio AMEVITEC" 
              imgTitle="Sitio AMEVITEC" 
              cardTitle= {t("app.proyectosFrontend.carousel.amevitec.cardTitle")} 
              text = {t("app.proyectosFrontend.carousel.amevitec.text")}
              btnLink='https://greenfreaks.github.io/amevitec/index.html' 
              btnText={t("app.proyectosFrontend.carousel.amevitec.btn")}
              btnBlank = {true}
              />

            <CardImg 
              img={FrontLeccionesVuelo} 
              imgAlt="Landing page Lecciones de vuelo" 
              imgTitle="Landing page Lecciones de vuelo" 
              cardTitle= {t("app.proyectosFrontend.carousel.leccionesVuelo.cardTitle")} 
              text = {t("app.proyectosFrontend.carousel.leccionesVuelo.text")}
              btnLink='https://msandovalv2022.github.io/tolko-podcast/' 
              btnText={t("app.proyectosFrontend.carousel.leccionesVuelo.btn")}
              btnBlank = {true}
              />

              {/* <CardImg 
              img={FrontTolko} 
              imgAlt="Sitio web Tolko Group" 
              imgTitle="Sitio web Tolko Group" 
              cardTitle= {t("app.proyectosFrontend.carousel.tolkoGroup.cardTitle")} 
              text = {t("app.proyectosFrontend.carousel.tolkoGroup.text")}
              btnLink='http://www.tolkogroup.com/' 
              btnText={t("app.proyectosFrontend.carousel.tolkoGroup.btn")}
              btnBlank = {true}
              /> */}

              <CardImg 
              img={FrontNave} 
              imgAlt="Animación Nave espacial con GSAP" 
              imgTitle="Animación Nave espacial con GSAP" 
              cardTitle= {t("app.proyectosFrontend.carousel.naveEspacial.cardTitle")} 
              text = {t("app.proyectosFrontend.carousel.naveEspacial.text")}
              btnLink='https://greenfreaks.github.io/cursosYt/gsap/blackWolf/clase3_naveEspacial/' 
              btnText={t("app.proyectosFrontend.carousel.naveEspacial.btn")}
              btnBlank = {true}
              />
            </Carousel>
            
          </div>
        </section>
        
        <div id='proyectosBackend' className='space'></div>
        {/* <section className='proyectosBackend'>
          <Titulo texto= {t("app.proyectosBackend.sectionTitle")} />
          <div className='sectionContent'>
            <Carousel breakPoints={breakPoints}>
              <CardImg 
              img={FrontTbr} 
              imgAlt="Sitio TBR" 
              imgTitle="Sitio TBR" 
              cardTitle= "Technology Business & Research" 
              text = "Desarrollo de sitio web de la StartUp Technology Business & Research, dedicada al ramo de la ciencia y la tecnología."
              btnLink='https://techbusiness.com.mx/' 
              btnText='Visitar'
              btnBlank = {true}
              />
            </Carousel>
            
          </div>
        </section> */}

        <div id='titulosCertificaciones' className='space'></div>
        <section className='titulosCertificaciones'>
          <Titulo texto= {t("app.titulosCertificaciones.sectionTitle")} />
          <div className='sectionContent'>
            <Certifications img={Utvam} imgAlt="Utvam" imgTitle="Utvam">
              <li><Link 
              link='https://drive.google.com/file/d/1Tz9hnW50E_deQpukT-2eEGlGPVyr0jKe/view?usp=share_link' 
              text={t("app.titulosCertificaciones.utvam.ingeniero")}
              alt="Título como ingeniero en Tecnologías de la Información" 
              blank = {true}/>
              </li>

              <li><Link 
              link='https://drive.google.com/file/d/1XNUhYLi4t9101Uiad7kwWmQOJ5Wmu7Ja/view?usp=share_link' 
              text={t("app.titulosCertificaciones.utvam.tecnico")}
              alt="Título como Técnico Superior Universitario en Tecnologías de la Información" 
              blank = {true}/>
              </li>

              <li><Link 
              link='https://drive.google.com/file/d/1cE-nM4nzVNqKNHTwz-HkjshdtZOGn1H6/view?usp=share_link' 
              text={t("app.titulosCertificaciones.utvam.nivelIngles")} 
              alt="Reconocimiento por obtener el nivel de Inglés B2" 
              blank = {true}/>
              </li>
            </Certifications>

            <Certifications img={Coderhouse} imgAlt="Coderhouse" imgTitle="Coderhouse">
              <li><Link 
              link='https://drive.google.com/file/d/1kyFW8TUQwpIz8QKawGH-df4JBcuOebgz/view?usp=share_link' 
              text={t("app.titulosCertificaciones.coderhouse.desarrolloWeb")}
              alt="Certificación en Desarrollo Web" 
              blank = {true}/>
              </li>
            </Certifications>

            <Certifications img={Itep} imgAlt="Itep" imgTitle="Itep">
              <li><Link 
              link='https://drive.google.com/file/d/1Hzu0yUIK2MsoP4Qvehw0tgBBnNhSi_RP/view?usp=share_link' 
              text={t("app.titulosCertificaciones.itep.nivelIngles")}
              alt="Certificación de nivel de Inglés B2" 
              blank = {true}/>
              </li>
            </Certifications>

            <Certifications img={Voxy} imgAlt="Voxy" imgTitle="Voxy">
              <li><Link 
              link='https://app.voxy.com/certificates/proficiency-test/615e8b1d292928097180a067/' 
              text={t("app.titulosCertificaciones.voxy.nivelIngles")}
              alt="Certificado de nivel de Inglés B2" 
              blank = {true}/>
              </li>
              
            </Certifications>

            <Certifications img={Alura} imgAlt="Alura" imgTitle="Alura">
              <li><Link 
              link='https://app.aluracursos.com/user/mariosandovalv1998/course/logica-de-programacion-primeros-pasos/formalCertificate' 
              text={t("app.titulosCertificaciones.alura.logicaProgramacion.conceptosPrimordiales")}
              alt="Lógica de programación: conceptos primordiales" 
              blank = {true}/>
              </li>

              <li><Link 
              link='https://app.aluracursos.com/user/mariosandovalv1998/course/logica-de-programacion-conceptos-primordiales/formalCertificate' 
              text={t("app.titulosCertificaciones.alura.logicaProgramacion.primerosPasos")}
              alt="Lógica de programación: primeros pasos" 
              blank = {true}/>
              </li>
            </Certifications>
          </div>

        </section>

        <div id='contacto' className='space'></div>
        <section className='contacto'>
          <Titulo texto= {t("app.contacto.sectionTitle")}/>
          <div className='contacto__fotoDescripcion sectionContent'>
            <img className='contacto__fotoDescripcion--foto' src={FotoMario} alt='Mario Sandoval Velázquez' title='Mario Sandoval Velázquez'></img>
            <div className='contacto__fotoDescripcion--descripcion'>
              <p>{t("app.contacto.1stPart")}</p>
              <p>{t("app.contacto.2ndPart")} <span className='greenTx'>{t("app.contacto.highlightedPart")}</span>"</p>
              <p>{t("app.contacto.myName")}<br />
                <span className='greenTx'>{t("app.contacto.myPosition")}</span>
              </p>
            
            </div>
          </div>
          <div className='contacto__social sectionContent'>
            <LinkImg className="" link="https://www.linkedin.com/in/mariosandoval-fullstack/" alt="Linkedin" blank="_blank" img={Linkedin} />
            <LinkImg className="" link="mailto:developermariosv@gmail.com" alt="Gmail" blank="_blank" img={Gmail} />
            <LinkImg className="" link="https://github.com/greenfreaks" alt="Github" blank="_blank" img={GithubSocial} />
          </div>

        </section>

        <div className='space'></div>
      </main>
    </div>
  );
}

export default App;