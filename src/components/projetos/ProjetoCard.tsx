import type { Projeto } from '../../data/projetosData';

import CardDetalhes from '../CardDetalhes';

type ProjetoCardProps = {
  projeto: Projeto;
  onVerDetalhes: (projeto: Projeto) => void;
};

export default function ProjetoCard({
  projeto,
  onVerDetalhes,
}: ProjetoCardProps) {
  return (
    <CardDetalhes
      id={`projeto-${projeto.id}`}
      categoria={projeto.categoria}
      titulo={projeto.titulo}
      capa={projeto.capa}
      capaAlt={projeto.capaAlt}
      modalId={`modal-projeto-${projeto.id}`}
      modoImagem='cover'
      onVerDetalhes={() => onVerDetalhes(projeto)}
    />
  );
}
