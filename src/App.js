import Navbar from './components/Navbar';
import Header from './components/Header';
import Titulo from './components/Titulo';

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

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
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
