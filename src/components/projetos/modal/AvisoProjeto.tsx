import type { Projeto } from '../../../data/projetosData';

type AvisoProjetoProps = {
  projeto: Projeto;
};

export default function AvisoProjeto({ projeto }: AvisoProjetoProps) {
  if (!projeto.aviso) {
    return null;
  }

  return (
    <aside
      className='
        rounded-xl border border-accent/30
        bg-accent/10 p-4
      '
    >
      <p className='text-sm leading-relaxed text-foreground'>
        <strong>Aviso:</strong> {projeto.aviso}
      </p>
    </aside>
  );
}
