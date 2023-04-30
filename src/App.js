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
      </main>
      
    </div>
  );
}

export default App;
