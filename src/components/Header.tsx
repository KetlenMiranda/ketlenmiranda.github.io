import { useState } from 'react';
import { linksNavegacao } from '../data/navigationLinks';
import MenuButton from './MenuButton';

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
        <MenuButton
          menuAberto={menuAberto}
          onAlternar={alternarMenu}
        />

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
                    transition-all duration-200
                    active:scale-95
                    active:shadow-inner
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-white
                    md:w-auto
                    
                    // cor no botão de contato
                    ${link.destaque
                      ? 'rounded-full bg-white text-slate-900 hover:bg-slate-200 active:bg-slate-300'
                      : 'rounded text-white hover:bg-white/10 active:bg-white/20'
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