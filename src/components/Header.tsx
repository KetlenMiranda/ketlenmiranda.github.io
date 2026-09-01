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
    <header className="relative w-full border-b border-border bg-primary">
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
                       block w-full border-b-2 border-transparent
                        px-3 py-2 text-center
                        text-sm font-medium text-foreground
                        transition-colors duration-200
                        hover:border-accent
                        hover:text-accent
                        focus-visible:border-accent
                        focus-visible:text-accent
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-accent
                        md:w-auto
                                        
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