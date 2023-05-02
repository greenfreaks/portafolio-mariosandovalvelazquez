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


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <h1>Hola</h1>
      <main>
        <div className='space'></div>
        <section className='tecnologias'>
          <Titulo texto= "Tecnologías"/>
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

        <div className='space'></div>
        <section className='proyectosFrontend'>
          <Titulo texto= 'Proyectos Front-end' />
          <div className='sectionContent'>
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
          </div>
        </section>

        <div className='space'></div>
        <section className='titulosCertificaciones'>
          <Titulo texto= "Títulos y certificaciones" />
          <div className='sectionContent'>
            <Certifications img={Utvam} imgAlt="Utvam" imgTitle="Utvam">
              <li><Link 
              link='https://drive.google.com/file/d/1Tz9hnW50E_deQpukT-2eEGlGPVyr0jKe/view?usp=share_link' 
              text="Título como Ingeniero en Tecnologías de la Información" 
              alt="Título como ingeniero en Tecnologías de la Información" 
              blank = {true}/>
              </li>

              <li><Link 
              link='https://drive.google.com/file/d/1XNUhYLi4t9101Uiad7kwWmQOJ5Wmu7Ja/view?usp=share_link' 
              text="Título como Técnico Superior Universitario en Tecnologías de la Información" 
              alt="Título como Técnico Superior Universitario en Tecnologías de la Información" 
              blank = {true}/>
              </li>

              <li><Link 
              link='https://drive.google.com/file/d/1cE-nM4nzVNqKNHTwz-HkjshdtZOGn1H6/view?usp=share_link' text="Reconocimiento por obtener el nivel de Inglés B2" 
              alt="Reconocimiento por obtener el nivel de Inglés B2" 
              blank = {true}/>
              </li>
            </Certifications>

            <Certifications img={Coderhouse} imgAlt="Coderhouse" imgTitle="Coderhouse">
              <li><Link 
              link='https://drive.google.com/file/d/1kyFW8TUQwpIz8QKawGH-df4JBcuOebgz/view?usp=share_link' 
              text="Certificación en Desarrollo Web" 
              alt="Certificación en Desarrollo Web" 
              blank = {true}/>
              </li>
            </Certifications>

            <Certifications img={Itep} imgAlt="Itep" imgTitle="Itep">
              <li><Link 
              link='https://drive.google.com/file/d/1Hzu0yUIK2MsoP4Qvehw0tgBBnNhSi_RP/view?usp=share_link' 
              text="Certificación de nivel de Inglés B2" 
              alt="Certificación de nivel de Inglés B2" 
              blank = {true}/>
              </li>
            </Certifications>

            <Certifications img={Voxy} imgAlt="Voxy" imgTitle="Voxy">
              <li><Link 
              link='https://app.voxy.com/certificates/proficiency-test/615e8b1d292928097180a067/' 
              text="Certificado de nivel de Inglés B2" 
              alt="Certificado de nivel de Inglés B2" 
              blank = {true}/>
              </li>
              
            </Certifications>

            <Certifications img={Alura} imgAlt="Alura" imgTitle="Alura">
              <li><Link 
              link='https://app.aluracursos.com/user/mariosandovalv1998/course/logica-de-programacion-primeros-pasos/formalCertificate' 
              text="Lógica de programación: conceptos primordiales" 
              alt="Lógica de programación: conceptos primordiales" 
              blank = {true}/>
              </li>

              <li><Link 
              link='https://app.aluracursos.com/user/mariosandovalv1998/course/logica-de-programacion-conceptos-primordiales/formalCertificate' 
              text="Lógica de programación: primeros pasos" 
              alt="Lógica de programación: primeros pasos" 
              blank = {true}/>
              </li>
            </Certifications>
          </div>

        </section>

        <div className='space'></div>
        <section className='contacto'>
          <Titulo texto= "Contacto"/>
          <div className='contacto__fotoDescripcion sectionContent'>
            <img className='contacto__fotoDescripcion--foto' src={FotoMario} alt='Mario Sandoval Velázquez' title='Mario Sandoval Velázquez'></img>
            <div className='contacto__fotoDescripcion--descripcion'>
              <p>"¡Hey! Si has llegado hasta aquí quiero agradecerte por tu interés en mi trabajo.</p>
              <p>Estoy muy emocionado por que comencemos a desarrollar grandes proyectos y escribir juntos <span className='greenTx'>una nueva historia de éxito.</span>"</p>
              <p>Mario Sandoval Velázquez <br />
                <span className='greenTx'>Desarrollador web</span>
              </p>
            
            </div>
          </div>
          <div className='contacto__social sectionContent'>
            <img src={Linkedin} alt='Linkedin' title='Linkedin'></img>
            <img src={Gmail} alt='Gmail' title='Gmail'></img>
            <img src={GithubSocial} alt='Github' title='Github'></img>
          </div>

        </section>

        <div className='space'></div>
      </main>
    </div>
  );
}

export default App;