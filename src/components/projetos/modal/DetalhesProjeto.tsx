import type { Projeto } from '../../../data/projetosData';

import TituloSecaoModal from './TituloSecaoModal';

type DetalhesProjetoProps = {
  projeto: Projeto;
};

export default function DetalhesProjeto({ projeto }: DetalhesProjetoProps) {
  if (projeto.detalhes.length === 0) {
    return null;
  }

  return (
    <section>
      <TituloSecaoModal>Informações do projeto</TituloSecaoModal>

      <dl
        className='
          mt-4 grid grid-cols-1
          gap-4 sm:grid-cols-2
        '
      >
        {projeto.detalhes.map((detalhe) => (
          <div
            key={detalhe.rotulo}
            className='
              rounded-lg border border-border
              bg-primary/40 p-4
            '
          >
            <dt className='text-sm font-bold text-foreground'>
              {detalhe.rotulo}
            </dt>

            <dd className='mt-1 text-sm leading-relaxed text-muted'>
              {detalhe.valor}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
