import type { Projeto } from '../../../data/projetosData';

type CabecalhoProjetoProps = {
  projeto: Projeto;
};

export default function CabecalhoProjeto({ projeto }: CabecalhoProjetoProps) {
  return (
    <header>
      <p
        className='
          text-xs font-bold uppercase
          tracking-[0.15em] text-accent
        '
      >
        {projeto.categoria}
      </p>

      <h2
        id={`titulo-modal-projeto-${projeto.id}`}
        className='
          mt-2 text-2xl font-bold
          leading-tight text-foreground
          sm:text-3xl
        '
      >
        {projeto.titulo}
      </h2>

      {projeto.instituicao && (
        <p className='mt-2 font-semibold text-accent'>{projeto.instituicao}</p>
      )}

      <p className='mt-4 leading-relaxed text-muted'>{projeto.descricao}</p>

      {projeto.descricaoCompleta?.map((paragrafo) => (
        <p key={paragrafo} className='mt-4 leading-relaxed text-muted'>
          {paragrafo}
        </p>
      ))}
    </header>
  );
}
