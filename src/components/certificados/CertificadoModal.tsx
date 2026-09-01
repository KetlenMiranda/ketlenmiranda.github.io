import { useEffect, useRef } from 'react';

import type { Certificado } from '../../data/certificadosData';

type CertificadoModalProps = {
  certificado: Certificado;
  onFechar: () => void;
};

export default function CertificadoModal({
  certificado,
  onFechar,
}: CertificadoModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const publicacao = certificado.destaques.find((destaque) => destaque.link);

  useEffect(() => {
    const modal = modalRef.current;

    if (modal && !modal.open) {
      modal.showModal();
    }
  }, []);

  const fecharModal = () => {
    modalRef.current?.close();
  };

  return (
    <dialog
      ref={modalRef}
      id={`modal-certificado-${certificado.id}`}
      aria-labelledby={`titulo-modal-${certificado.id}`}
      onClose={onFechar}
      onClick={(evento) => {
        if (evento.target === evento.currentTarget) {
          fecharModal();
        }
      }}
      className='
        m-auto max-h-[90vh]
        w-[calc(100%-2rem)] max-w-4xl
        overflow-y-auto rounded-2xl
        border border-border
        bg-primary p-0 text-foreground
        shadow-2xl
        backdrop:bg-surface-dark/70
      '
    >
      <div className='relative p-6 sm:p-8'>
        <button
          type='button'
          aria-label='Fechar detalhes da pesquisa'
          onClick={fecharModal}
          className='
            absolute right-4 top-4
            flex h-11 w-11 items-center
            justify-center rounded-full
            text-2xl text-foreground
            transition-colors
            hover:bg-accent/10
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent
          '
        >
          <span aria-hidden='true'>×</span>
        </button>

        <header className='pr-12'>
          <p
            className='
              text-sm font-bold uppercase
              tracking-[0.18em] text-accent
            '
          >
            Pesquisa acadêmica
          </p>

          <h2
            id={`titulo-modal-${certificado.id}`}
            className='
              mt-3 text-2xl font-bold
              leading-tight text-foreground
              sm:text-3xl
            '
          >
            {certificado.titulo}
          </h2>

          <p className='mt-3 font-semibold text-accent'>
            {certificado.instituicao}
          </p>
        </header>

        <section
          aria-labelledby={`titulo-detalhes-${certificado.id}`}
          className='mt-8 border-t border-border pt-6'
        >
          <h3
            id={`titulo-detalhes-${certificado.id}`}
            className='
              text-sm font-bold uppercase
              tracking-[0.15em] text-foreground
            '
          >
            Detalhes
          </h3>

          <dl
            className='
              mt-4 grid grid-cols-1 gap-4
              sm:grid-cols-2
            '
          >
            {certificado.detalhes.map((detalhe) => (
              <div
                key={detalhe.rotulo}
                className='
                  rounded-lg border border-border
                  bg-white/50 p-4
                '
              >
                <dt
                  className='
                    text-xs font-bold uppercase
                    tracking-[0.12em] text-accent
                  '
                >
                  {detalhe.rotulo}
                </dt>

                <dd className='mt-2 text-sm leading-relaxed text-muted'>
                  {detalhe.valor}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {certificado.destaques.length > 0 && (
          <section
            aria-labelledby={`titulo-destaques-${certificado.id}`}
            className='mt-8 border-t border-border pt-6'
          >
            <h3
              id={`titulo-destaques-${certificado.id}`}
              className='
                text-sm font-bold uppercase
                tracking-[0.15em] text-foreground
              '
            >
              Destaques
            </h3>

            <ul className='mt-4 space-y-3'>
              {certificado.destaques.map((destaque) => (
                <li
                  key={destaque.descricao}
                  className='
                    flex items-start gap-3
                    text-sm leading-relaxed text-muted
                  '
                >
                  <span
                    aria-hidden='true'
                    className='
                      mt-2 h-2 w-2 shrink-0
                      rounded-full bg-accent
                    '
                  />

                  <span>{destaque.descricao}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {certificado.fotos.length > 0 && (
          <section
            aria-labelledby={`titulo-fotos-${certificado.id}`}
            className='mt-8 border-t border-border pt-6'
          >
            <h3
              id={`titulo-fotos-${certificado.id}`}
              className='
                text-sm font-bold uppercase
                tracking-[0.15em] text-foreground
              '
            >
              Fotos da apresentação
            </h3>

            <ul
              className='
                mt-4 grid grid-cols-1 gap-4
                sm:grid-cols-2
              '
            >
              {certificado.fotos.map((foto) => (
                <li key={foto.src}>
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    loading='lazy'
                    className='
                      aspect-[4/3] w-full
                      rounded-lg object-cover
                    '
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        <div
          className='
            mt-8 flex flex-col gap-3
            border-t border-border pt-6
            sm:flex-row
          '
        >
          {publicacao?.link && (
            <a
              href={publicacao.link}
              target='_blank'
              rel='noreferrer'
              aria-label='Ver publicação em uma nova guia'
              className='
                inline-flex min-h-11
                items-center justify-center
                rounded-lg bg-accent
                px-5 py-2 font-semibold
                text-white transition-colors
                hover:bg-accent/90
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
                focus-visible:ring-offset-2
              '
            >
              Ver publicação
            </a>
          )}

          <a
            href={certificado.linkCertificado ?? certificado.imagem}
            target='_blank'
            rel='noreferrer'
            aria-label={`Ver certificado da pesquisa ${certificado.titulo} em uma nova guia`}
            className='
              inline-flex min-h-11
              items-center justify-center
              rounded-lg border border-accent
              px-5 py-2 font-semibold
              text-accent transition-colors
              hover:bg-accent hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
              focus-visible:ring-offset-2
            '
          >
            Ver certificado
          </a>
        </div>
      </div>
    </dialog>
  );
}
