import { useState } from 'react';

import SocialLinks, { linksSociais } from '../SocialLinks';

import { linksNavegacao } from '../../data/navigationLinks';

import PoliticaPrivacidadeModal from './PoliticaPrivacidadeModal';

export default function Footer() {
  const [politicaAberta, setPoliticaAberta] = useState(false);

  const anoAtual = new Date().getFullYear();

  const linksRodape = linksNavegacao.filter(
    (link) => link.exibirNoRodape !== false,
  );

  const linkEmail = linksSociais.find((link) => link.nome === 'E-mail');

  return (
    <>
      <footer
        id='contato'
        className='
          w-full border-t-2
          border-accent bg-surface-dark
          text-white
        '
      >
        <div
          className='
            mx-auto w-full max-w-[100rem]
            px-6 py-12
            sm:px-10
            lg:px-12 lg:py-14
            xl:px-16
            2xl:px-20
          '
        >
          <div
            className='
              grid grid-cols-1 gap-10
              text-center
              lg:grid-cols-[1fr_1.5fr_1fr]
              lg:items-start lg:text-left
            '
          >
            <section aria-labelledby='titulo-identidade-footer'>
              <h2 id='titulo-identidade-footer' className='text-xl font-bold'>
                Ketlen Miranda
              </h2>

              <p className='mt-3 text-sm text-white/65'>
                Analista e Desenvolvedora de Sistemas
              </p>
            </section>

            <nav aria-label='Navegação do rodapé'>
              <h2
                className='
                  text-xs font-bold uppercase
                  tracking-[0.15em] text-accent
                  lg:text-center
                '
              >
                Navegação
              </h2>

              <ul
                className='
                  mt-5 flex flex-wrap
                  justify-center gap-x-4 gap-y-3
                '
              >
                {linksRodape.map((link, indice) => (
                  <li key={link.href} className='flex items-center gap-4'>
                    <a
                      href={link.href}
                      className='
                        text-sm text-white/80
                        transition-colors
                        hover:text-accent
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-accent
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-surface-dark
                      '
                    >
                      {link.texto}
                    </a>

                    {indice < linksRodape.length - 1 && (
                      <span aria-hidden='true' className='text-accent'>
                        •
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <section
              aria-labelledby='titulo-contato-footer'
              className='lg:text-center'
            >
              <h2
                id='titulo-contato-footer'
                className='
                  text-xs font-bold uppercase
                  tracking-[0.15em] text-accent
                '
              >
                Contato
              </h2>

              {linkEmail && (
                <a
                  href={linkEmail.href}
                  className='
                    mt-5 inline-block text-sm
                    text-white/80 transition-colors
                    hover:text-accent
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-accent
                  '
                >
                  ketlencostadev@gmail.com
                </a>
              )}

              <SocialLinks tema='escuro' className='mt-5' />
            </section>
          </div>

          <div
            className='
              mt-10 flex flex-col
              items-center gap-4
              border-t border-white/20 pt-6
              text-center text-sm text-white/60
              md:flex-row md:justify-between
              md:text-left
            '
          >
            <p>© {anoAtual} Ketlen Miranda</p>

            <div
              className='
                flex flex-col items-center gap-3
                sm:flex-row
              '
            >
              <button
                type='button'
                onClick={() => setPoliticaAberta(true)}
                className='
                  text-accent
                  underline-offset-4
                  hover:underline
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                '
              >
                Política de Privacidade
              </button>

              <span
                aria-hidden='true'
                className='hidden text-white/30 sm:inline'
              >
                |
              </span>

              <p>Feito com React e TypeScript</p>
            </div>
          </div>
        </div>
      </footer>

      {politicaAberta && (
        <PoliticaPrivacidadeModal onFechar={() => setPoliticaAberta(false)} />
      )}
    </>
  );
}
