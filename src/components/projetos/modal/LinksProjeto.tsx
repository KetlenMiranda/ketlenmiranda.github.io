import type { LinkProjeto, Projeto } from '../../../data/projetosData';

type LinksProjetoProps = {
  projeto: Projeto;
};

function montarLinks(projeto: Projeto): LinkProjeto[] {
  const links: LinkProjeto[] = [];

  if (projeto.repositorio) {
    links.push({ rotulo: 'Ver repositório', url: projeto.repositorio });
  }

  return links.concat(projeto.links ?? []);
}

export default function LinksProjeto({ projeto }: LinksProjetoProps) {
  const links = montarLinks(projeto);

  if (links.length === 0) {
    return null;
  }

  return (
    <footer
      className='
        flex flex-wrap gap-3
        border-t border-border pt-6
      '
    >
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
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
          {link.rotulo}
        </a>
      ))}
    </footer>
  );
}
