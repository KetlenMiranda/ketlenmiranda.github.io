import type { IconType } from 'react-icons';
import { FaCode, FaGraduationCap } from 'react-icons/fa';

import SectionTitle from './SectionTitle';

type InformacaoSobreMim = {
  titulo: string;
  destaque: string;
  descricao: string;
  icone: IconType;
};

const informacoesSobreMim: InformacaoSobreMim[] = [
  {
    titulo: 'Formação',
    destaque: 'Análise e Desenvolvimento de Sistemas',
    descricao: 'Instituto Federal de Goiás — IFG',
    icone: FaGraduationCap,
  },
  {
    titulo: 'Perfil',
    destaque: 'Desenvolvedora Full Stack',
    descricao: 'Conhecimentos em desenvolvimento front-end e back-end',
    icone: FaCode,
  },
];

export default function SobreMim() {
  return (
    <section
      id='sobre-mim'
      aria-labelledby='titulo-sobre-mim'
      className='min-h-[calc(100vh-3.5rem)] w-full bg-primary'
    >
      <div
        className='
          mx-auto w-full max-w-7xl
          px-6 py-16
          sm:px-10 sm:py-20
          md:px-16
        '
      >
        <SectionTitle id='titulo-sobre-mim' title='Sobre mim' />

        <p
          className='
            mx-auto mt-8 max-w-3xl
            text-left text-base leading-relaxed
            text-muted
            sm:text-justify sm:text-lg
          '
        >
          Sou Analista e Desenvolvedora de Sistemas, com perfil Full Stack.
          Estou sempre buscando aprimorar minhas habilidades e aplicar boas
          práticas de desenvolvimento.
        </p>

        <ul
          className='
            mx-auto mt-14 flex max-w-2xl
            flex-col gap-12
          '
        >
          {informacoesSobreMim.map((informacao) => {
            const Icone = informacao.icone;

            return (
              <li
                key={informacao.titulo}
                className='flex flex-col items-center text-center'
              >
                <div
                  className='
                    mt-1 flex h-12 w-12 shrink-0
                    items-center justify-center
                    text-accent/40
                  '
                >
                  <Icone
                    className='text-4xl'
                    aria-hidden='true'
                    focusable='false'
                  />
                </div>

                <div className='text-center'>
                  <h3
                    className='
                      text-base font-bold uppercase
                      tracking-[0.2em] text-foreground
                    '
                  >
                    {informacao.titulo}
                  </h3>

                  <span
                    aria-hidden='true'
                    className='mx-auto mt-3 block h-0.5 w-10 bg-accent'
                  />

                  <p className='mt-4 text-base font-medium text-foreground'>
                    {informacao.destaque}
                  </p>

                  <p className='mt-2 text-sm leading-relaxed text-muted'>
                    {informacao.descricao}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
