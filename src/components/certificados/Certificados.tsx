import { useState } from 'react';

import { certificados, type Certificado } from '../../data/certificadosData';

import SectionTitle from '../SectionTitle';

import CertificadoCard from './CertificadoCard';
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
          px-6 py-16
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
            md:grid-cols-2
          '
        >
          {certificados.map((certificado) => (
            <CertificadoCard
              key={certificado.id}
              certificado={certificado}
              onVerDetalhes={setCertificadoSelecionado}
            />
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
