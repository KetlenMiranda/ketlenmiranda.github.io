import { useState } from 'react';

import { certificados, type Certificado } from '../../data/certificadosData';

import CardDetalhes from '../CardDetalhes';
import SectionTitle from '../SectionTitle';
import CertificadoModal from './CertificadoModal';

export default function Certificados() {
  const [certificadoSelecionado, setCertificadoSelecionado] =
    useState<Certificado | null>(null);

  return (
    <section
      id='certificados'
      aria-labelledby='titulo-certificados'
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

        <SectionTitle id='titulo-certificados' title='Certificados' />

        <ul
          className='
            mx-auto mt-12 grid max-w-5xl
            grid-cols-1 gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          '
        >
          {certificados.map((certificado) => (
            <li key={certificado.id} className='h-full min-w-0'>
              <CardDetalhes
                id={`certificado-${certificado.id}`}
                categoria={certificado.categoria}
                titulo={certificado.titulo}
                capa={certificado.capa}
                capaAlt={certificado.capaAlt}
                modalId={`modal-certificado-${certificado.id}`}
                modoImagem='contain'
                onVerDetalhes={() => setCertificadoSelecionado(certificado)}
              />
            </li>
          ))}
        </ul>
      </div>

      {certificadoSelecionado && (
        <CertificadoModal
          certificado={certificadoSelecionado}
          onFechar={() => setCertificadoSelecionado(null)}
        />
      )}
    </section>
  );
}
