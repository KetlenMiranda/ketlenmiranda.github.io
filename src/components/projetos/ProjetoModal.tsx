import type { MouseEvent } from 'react';

import type { Projeto } from '../../data/projetosData';

import useModalAcessivel from '../../hooks/useModalAcessivel';

import AvisoProjeto from './modal/AvisoProjeto';
import BotaoFecharModal from './modal/BotaoFecharModal';
import CabecalhoProjeto from './modal/CabecalhoProjeto';
import DemonstracaoProjeto from './modal/DemonstracaoProjeto';
import DetalhesProjeto from './modal/DetalhesProjeto';
import FotosProjeto from './modal/FotosProjeto';
import FuncionalidadesProjeto from './modal/FuncionalidadesProjeto';
import LinksProjeto from './modal/LinksProjeto';
import TecnologiasProjeto from './modal/TecnologiasProjeto';

type ProjetoModalProps = {
  projeto: Projeto;
  onFechar: () => void;
};

export default function ProjetoModal({ projeto, onFechar }: ProjetoModalProps) {
  useModalAcessivel(onFechar);

  function fecharAoClicarFora(evento: MouseEvent<HTMLDivElement>) {
    if (evento.target === evento.currentTarget) {
      onFechar();
    }
  }

  return (
    <div
      id={`modal-projeto-${projeto.id}`}
      role='dialog'
      aria-modal='true'
      aria-labelledby={`titulo-modal-projeto-${projeto.id}`}
      onClick={fecharAoClicarFora}
      className='
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60 p-4
      '
    >
      <article
        className='
          relative max-h-[92vh]
          w-full max-w-6xl
          overflow-y-auto rounded-2xl
          border border-border
          bg-white shadow-2xl
        '
      >
        <BotaoFecharModal onFechar={onFechar} />

        <div
          className='
            space-y-8 p-5 pt-16
            sm:p-8 sm:pt-16
          '
        >
          <CabecalhoProjeto projeto={projeto} />

          <AvisoProjeto projeto={projeto} />

          <DetalhesProjeto projeto={projeto} />

          <TecnologiasProjeto projeto={projeto} />

          <FuncionalidadesProjeto projeto={projeto} />

          <DemonstracaoProjeto projeto={projeto} />

          <FotosProjeto projeto={projeto} />

          <LinksProjeto projeto={projeto} />
        </div>
      </article>
    </div>
  );
}
