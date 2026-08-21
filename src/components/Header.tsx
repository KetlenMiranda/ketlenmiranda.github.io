import { useState } from 'react';
export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <header
      className="relative w-full bg-primary">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-end px-4 py-2 sm:px-6 lg:px-8">
        <button
          type="button"
          className="rounded p-2 text-white md:hidden"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          onClick={() => setMenuAberto((estadoAtual) => !estadoAtual)}
        >
          <span aria-hidden="true">
            ☰
          </span>

        </button>
        <nav
          id="menu-principal"
          className={`
             ${menuAberto ? 'flex' : 'hidden'}
            absolute right-4 top-full z-50 mt-2 w-56
            flex-col items-center gap-1
            rounded-xl bg-primary px-4 py-4 shadow-lg
            md:static md:mt-0 md:flex md:w-auto md:flex-row
            md:gap-8  md:rounded-none md:bg-transparent md:p-0 md:shadow-none `
          }
        >

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
      </div>

    </header>
  );
}