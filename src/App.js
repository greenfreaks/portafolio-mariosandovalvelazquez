import Navbar from './components/Navbar';
import Header from './components/Header';
import Titulo from './components/Titulo';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <section className='tecnologias'>
        <Titulo texto= "Tecnologías"/>
      </section>
    </div>
  );
}

export default App;
