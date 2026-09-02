import { useState } from 'react';

import { projetos, type Projeto } from '../../data/projetosData';

import CardDetalhes from '../CardDetalhes';
import SectionTitle from '../SectionTitle';
import ProjetoModal from './ProjetoModal';

export default function Projetos() {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(
    null,
  );

  return (
    <section
      id='projetos'
      aria-labelledby='titulo-projetos'
      className='w-full bg-primary'
    >
      <div
        className='
          mx-auto w-full max-w-7xl
          px-4 py-16
          sm:px-10 sm:py-20
          md:px-16
        '
      >
        <div
          aria-hidden='true'
          className='mb-14 flex items-center justify-center gap-2'
        >
          <span className='h-0.5 w-7 bg-surface-dark' />

          <span className='font-bold tracking-[-0.2em] text-surface-dark'>
            ⌄⌄⌄
          </span>

          <span className='h-0.5 w-7 bg-surface-dark' />
        </div>

        <SectionTitle id='titulo-projetos' title='Projetos' />

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
              <CardDetalhes
                id={`projeto-${projeto.id}`}
                categoria={projeto.categoria}
                titulo={projeto.titulo}
                capa={projeto.capa}
                capaAlt={projeto.capaAlt}
                modalId={`modal-projeto-${projeto.id}`}
                modoImagem='cover'
                onVerDetalhes={() => setProjetoSelecionado(projeto)}
              />
            </li>
          ))}
        </ul>
      </div>

      {projetoSelecionado && (
        <ProjetoModal
          projeto={projetoSelecionado}
          onFechar={() => setProjetoSelecionado(null)}
        />
      )}
    </section>
  );
}
