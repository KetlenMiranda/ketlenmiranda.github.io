import Header from './components/Header';
import Hero from './components/Hero';
import SobreMim from './components/SobreMim';
import Habilidades from './components/habilidades/Habilidades';
import Certificados from './components/certificados/Certificados';
import Projetos from './components/projetos/Projetos';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SobreMim />
      <Certificados />
      <Habilidades />
      <Projetos />
    </>
  );
}

export default App;
