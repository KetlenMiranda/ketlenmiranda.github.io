import { useEffect, type MouseEvent } from 'react';

import type { Projeto } from '../../data/projetosData';

type ProjetoModalProps = {
  projeto: Projeto;
  onFechar: () => void;
};

export default function ProjetoModal({ projeto, onFechar }: ProjetoModalProps) {
  useEffect(() => {
    const overflowAnterior = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    function fecharComEsc(evento: KeyboardEvent) {
      if (evento.key === 'Escape') {
        onFechar();
      }
    }

    window.addEventListener('keydown', fecharComEsc);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener('keydown', fecharComEsc);
    };
  }, [onFechar]);

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
        <button
          type='button'
          aria-label='Fechar detalhes do projeto'
          onClick={onFechar}
          className='
            absolute right-4 top-4 z-20
            flex h-11 w-11 items-center
            justify-center rounded-full
            bg-white text-2xl text-foreground
            shadow-md transition-colors
            hover:bg-primary
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent
          '
        >
          ×
        </button>

        <div
          className='
            space-y-8 p-5 pt-16
            sm:p-8 sm:pt-16
          '
        >
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
              <p className='mt-2 font-semibold text-accent'>
                {projeto.instituicao}
              </p>
            )}

            <p className='mt-4 leading-relaxed text-muted'>
              {projeto.descricao}
            </p>
          </header>

          {projeto.aviso && (
            <aside
              className='
                rounded-xl border border-accent/30
                bg-accent/10 p-4
              '
            >
              <p className='text-sm leading-relaxed text-foreground'>
                <strong>Aviso:</strong> {projeto.aviso}
              </p>
            </aside>
          )}

          {projeto.detalhes.length > 0 && (
            <section>
              <h3
                className='
                  text-sm font-bold uppercase
                  tracking-[0.15em] text-foreground
                '
              >
                Informações do projeto
              </h3>

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
          )}

          {projeto.tecnologias.length > 0 && (
            <section>
              <h3
                className='
                  text-sm font-bold uppercase
                  tracking-[0.15em] text-foreground
                '
              >
                Tecnologias
              </h3>

              <ul className='mt-4 flex flex-wrap gap-2'>
                {projeto.tecnologias.map((tecnologia) => (
                  <li
                    key={tecnologia}
                    className='
                      rounded-full border border-accent
                      px-4 py-2 text-sm
                      font-semibold text-accent
                    '
                  >
                    {tecnologia}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {projeto.funcionalidades.length > 0 && (
            <section>
              <h3
                className='
                  text-sm font-bold uppercase
                  tracking-[0.15em] text-foreground
                '
              >
                Principais funcionalidades
              </h3>

              <ul className='mt-4 space-y-3'>
                {projeto.funcionalidades.map((funcionalidade) => (
                  <li
                    key={funcionalidade}
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

                    <span>{funcionalidade}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {projeto.demonstracao && (
            <section
              aria-labelledby={`jogo-projeto-${projeto.id}`}
              className='border-t border-border pt-8'
            >
              <h3
                id={`jogo-projeto-${projeto.id}`}
                className='
                  text-sm font-bold uppercase
                  tracking-[0.15em] text-foreground
                '
              >
                Experimente o projeto
              </h3>

              <p className='mt-2 text-sm leading-relaxed text-muted'>
                Clique dentro do jogo para ativar os controles. Recomendado para
                computadores.
              </p>

              <div
                className='
                  mt-5 overflow-hidden rounded-xl
                  border border-border bg-black
                  shadow-md
                '
              >
                <iframe
                  src={projeto.demonstracao}
                  title={`Jogar ${projeto.titulo}`}
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
          )}

          {projeto.fotos.length > 0 && (
            <section
              aria-labelledby={`fotos-projeto-${projeto.id}`}
              className='border-t border-border pt-8'
            >
              <h3
                id={`fotos-projeto-${projeto.id}`}
                className='
                  text-sm font-bold uppercase
                  tracking-[0.15em] text-foreground
                '
              >
                Imagens do sistema
              </h3>

              <ul
                className='
                  mt-5 grid grid-cols-1 gap-5
                  md:grid-cols-2
                '
              >
                {projeto.fotos.map((foto) => (
                  <li key={foto.src}>
                    <a
                      href={foto.src}
                      target='_blank'
                      rel='noreferrer'
                      aria-label={`${foto.alt}. Abrir imagem em uma nova guia`}
                      className='
                        block overflow-hidden rounded-xl
                        border border-border bg-primary/30
                        transition-shadow hover:shadow-md
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-accent
                      '
                    >
                      <img
                        src={foto.src}
                        alt={foto.alt}
                        loading='lazy'
                        className='
                          aspect-video w-full
                          object-contain
                        '
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {projeto.repositorio && (
            <footer
              className='
                flex flex-wrap gap-3
                border-t border-border pt-6
              '
            >
              <a
                href={projeto.repositorio}
                target='_blank'
                rel='noreferrer'
                className='
                  inline-flex min-h-11 items-center
                  justify-center rounded-lg
                  border border-accent
                  px-5 py-2 text-sm
                  font-semibold text-accent
                  transition-colors
                  hover:bg-accent hover:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                '
              >
                Ver repositório
              </a>
            </footer>
          )}
        </div>
      </article>
    </div>
  );
}
