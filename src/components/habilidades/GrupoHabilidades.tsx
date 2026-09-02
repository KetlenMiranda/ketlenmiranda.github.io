import type { GrupoHabilidades as GrupoHabilidadesType } from '../../data/habilidadesData';

import HabilidadeItem from './HabilidadeItem';

type GrupoHabilidadesProps = {
  grupo: GrupoHabilidadesType;
};

export default function GrupoHabilidades({ grupo }: GrupoHabilidadesProps) {
  return (
    <li
      className='
        grid gap-6 border-b border-border
        px-5 py-7
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
          {grupo.titulo}
        </h3>

        <span aria-hidden='true' className='h-0.5 w-10 shrink-0 bg-accent' />
      </div>

      <ul
        aria-label={`Habilidades de ${grupo.titulo}`}
        className='
          flex flex-wrap justify-center
          gap-x-5 gap-y-6
          md:justify-start
        '
      >
        {grupo.habilidades.map((habilidade) => (
          <HabilidadeItem key={habilidade.nome} habilidade={habilidade} />
        ))}
      </ul>
    </li>
  );
}
