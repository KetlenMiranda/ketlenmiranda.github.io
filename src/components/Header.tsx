import { useState } from 'react';
import { linksNavegacao } from '../data/navigationLinks';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto((estadoAtual) => !estadoAtual);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <header className="relative w-full bg-primary">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="
            rounded p-2 text-white transition-colors
            hover:bg-white/10
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
            md:hidden
          "
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          onClick={alternarMenu}
        >
          <span
            className="text-2xl leading-none"
            aria-hidden="true"
          >
            ☰
          </span>
        </button>

        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className={`
            ${menuAberto ? 'block' : 'hidden'}
            absolute right-4 top-full z-50 mt-2 w-56
            rounded-xl bg-primary p-4 shadow-lg
            md:static md:mt-0 md:block md:w-auto
            md:rounded-none md:bg-transparent
            md:p-0 md:shadow-none
          `}
        >
          <ul className="flex flex-col items-center gap-1 md:flex-row md:gap-8">
            {linksNavegacao.map((link) => (
              <li
                key={link.href}
                className="w-full md:w-auto"
              >
                <a
                  href={link.href}
                  className={`
                    block w-full px-3 py-2
                    text-center text-sm font-medium
                    transition-colors
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-white
                    md:w-auto
                    ${
                      link.destaque
                        ? 'rounded-full bg-white text-slate-900 hover:bg-slate-200'
                        : 'rounded text-white hover:bg-white/10'
                    }
                  `}
                  onClick={fecharMenu}
                >
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}