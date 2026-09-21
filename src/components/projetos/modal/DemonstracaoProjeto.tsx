import type { Projeto } from '../../../data/projetosData';

import TituloSecaoModal from './TituloSecaoModal';

const TITULO_PADRAO = 'Experimente o projeto';

const DESCRICAO_PADRAO =
  'Clique dentro do jogo para ativar os controles. Recomendado para computadores.';

type DemonstracaoProjetoProps = {
  projeto: Projeto;
};

export default function DemonstracaoProjeto({
  projeto,
}: DemonstracaoProjetoProps) {
  if (!projeto.demonstracao) {
    return null;
  }

  const tituloId = `jogo-projeto-${projeto.id}`;

  const titulo = projeto.demonstracaoTitulo ?? TITULO_PADRAO;

  const descricao = projeto.demonstracaoDescricao ?? DESCRICAO_PADRAO;

  const tituloIframe = projeto.demonstracaoTitulo
    ? `${projeto.demonstracaoTitulo} — ${projeto.titulo}`
    : `Jogar ${projeto.titulo}`;

  return (
    <section aria-labelledby={tituloId} className='border-t border-border pt-8'>
      <TituloSecaoModal id={tituloId}>{titulo}</TituloSecaoModal>

      <p className='mt-2 text-sm leading-relaxed text-muted'>{descricao}</p>

      <div
        className='
          mt-5 overflow-hidden rounded-xl
          border border-border bg-black
          shadow-md
        '
      >
        <iframe
          src={projeto.demonstracao}
          title={tituloIframe}
          loading='lazy'
          allow='autoplay; fullscreen; gamepad'
          allowFullScreen
          referrerPolicy='strict-origin-when-cross-origin'
          className='
            block aspect-video
            min-h-[360px] w-full
            md:min-h-[520px]
          '
        />
      </div>
    </section>
  );
}
