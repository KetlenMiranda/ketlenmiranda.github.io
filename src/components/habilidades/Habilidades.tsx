import {
  conhecimentosComplementares,
  gruposHabilidades,
} from '../../data/HabilidadesData';

import SectionTitle from '../SectionTitle';
import GrupoHabilidades from './GrupoHabilidades';

export default function Habilidades() {
  return (
    <section
      id='habilidades'
      aria-labelledby='titulo-habilidades'
      aria-describedby='descricao-habilidades'
      className='w-full bg-primary'
    >
      <div
        className='
          mx-auto w-full max-w-7xl
          px-6 py-16
          sm:px-10 sm:py-20
          md:px-16
        '
      >
        <div
          aria-hidden='true'
          className='mb-14 flex items-center justify-center gap-2'
        >
          <span className='h-0.5 w-7 bg-surface-dark' />

          <span className='font-bold tracking-[-0.2em] text-surface-dark'>
            ⌄⌄⌄
          </span>

          <span className='h-0.5 w-7 bg-surface-dark' />
        </div>

        <SectionTitle id='titulo-habilidades' title='Habilidades' />

        <p
          id='descricao-habilidades'
          className='
            mx-auto mt-7 max-w-2xl
            text-center text-base leading-relaxed
            text-muted
          '
        >
          Tecnologias, ferramentas e conceitos que utilizo no desenvolvimento de
          aplicações web.
        </p>

        <ul
          className='
            mx-auto mt-12 max-w-6xl
            overflow-hidden rounded-xl
            border border-border
          '
        >
          {gruposHabilidades.map((grupo) => (
            <GrupoHabilidades key={grupo.id} grupo={grupo} />
          ))}

          <li
            className='
              grid gap-6 px-5 py-7
              md:grid-cols-[14rem_1fr]
              md:items-center md:px-8
            '
          >
            <div
              className='
                flex items-center justify-center gap-5
                md:justify-between
              '
            >
              <h3
                className='
                  text-sm font-bold uppercase
                  tracking-[0.2em] text-foreground
                '
              >
                Conhecimentos complementares
              </h3>

              <span
                aria-hidden='true'
                className='h-0.5 w-10 shrink-0 bg-accent'
              />
            </div>

            <ul
              aria-label='Conhecimentos complementares'
              className='
                flex flex-wrap justify-center
                gap-3 md:justify-start
              '
            >
              {conhecimentosComplementares.map((conhecimento) => (
                <li
                  key={conhecimento}
                  className='
                    rounded-md border border-accent/50
                    px-4 py-2 text-xs font-medium
                    uppercase tracking-[0.08em]
                    text-foreground
                  '
                >
                  {conhecimento}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
