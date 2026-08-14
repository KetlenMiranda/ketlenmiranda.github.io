import Header from './components/Header';
import Hero from './components/Hero';
import SobreMim from './components/SobreMim';
import Habilidades from './components/Habilidades';
import Certificados from './components/Certificados';
import Projetos from './components/Projetos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-90 text-slate-900">
      <Header />
      <Hero />
      <SobreMim />
      <Habilidades />
      <Certificados />
      <Projetos />
      <Footer />
    </div>
  );
}

export default App;