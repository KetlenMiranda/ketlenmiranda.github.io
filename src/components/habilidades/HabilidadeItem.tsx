import type { Habilidade } from '../../data/habilidadesData';

type HabilidadeItemProps = {
  habilidade: Habilidade;
};

export default function HabilidadeItem({ habilidade }: HabilidadeItemProps) {
  const Icone = habilidade.icone;

  return (
    <li className='flex w-24 flex-col items-center gap-2 text-center'>
      <Icone
        aria-hidden='true'
        className='h-10 w-10'
        style={{ color: habilidade.cor }}
      />

      <span
        className='
          text-xs font-medium uppercase
          tracking-[0.08em] text-foreground
        '
      >
        {habilidade.nome}
      </span>
    </li>
  );
}
