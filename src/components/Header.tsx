export default function Header() {
  return (
    <header className="bg-primary w-full px-8 py-1 justify-end items-center flex">
      <nav className="flex items-center gap-6">
        <a href="#sobre-mim" className="text-white font-medium text-sm">Sobre Mim</a>
        <a href="#habilidades" className="text-white font-medium text-sm">Habilidades</a>
        <a href="#certificados" className="text-white font-medium text-sm">Certificados</a>
        <a href="#projetos" className="text-white font-medium text-sm">Projetos</a>
        <a
          href="#entreEmContato"
          className="bg-white text-slate-900 px-3 py-1 rounded-full font-medium text-sm"
        >
          Entre em contato
        </a>
      </nav>
    </header>
  );
}