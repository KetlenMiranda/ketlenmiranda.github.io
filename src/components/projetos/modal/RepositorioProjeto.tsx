import type { Projeto } from '../../../data/projetosData';

type RepositorioProjetoProps = {
  projeto: Projeto;
};

export default function RepositorioProjeto({
  projeto,
}: RepositorioProjetoProps) {
  if (!projeto.repositorio) {
    return null;
  }

  return (
    <footer
      className='
        flex flex-wrap gap-3
        border-t border-border pt-6
      '
    >
      <a
        href={projeto.repositorio}
        target='_blank'
        rel='noreferrer'
        className='
          inline-flex min-h-11 items-center
          justify-center rounded-lg
          border border-accent
          px-5 py-2 text-sm
          font-semibold text-accent
          transition-colors
          hover:bg-accent hover:text-white
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-accent
        '
      >
        Ver repositório
      </a>
    </footer>
  );
}
