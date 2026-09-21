import type { Projeto } from '../../data/projetosData';

import ProjetoCard from './ProjetoCard';

type ListaProjetosProps = {
  projetos: Projeto[];
  onVerDetalhes: (projeto: Projeto) => void;
};

export default function ListaProjetos({
  projetos,
  onVerDetalhes,
}: ListaProjetosProps) {
  return (
    <ul
      className='
        mx-auto mt-12 grid max-w-5xl
        grid-cols-1 gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      '
    >
      {projetos.map((projeto) => (
        <li key={projeto.id} className='h-full min-w-0'>
          <ProjetoCard projeto={projeto} onVerDetalhes={onVerDetalhes} />
        </li>
      ))}
    </ul>
  );
}
