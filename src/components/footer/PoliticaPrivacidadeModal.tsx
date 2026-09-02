import { useEffect, type MouseEvent } from 'react';

type PoliticaPrivacidadeModalProps = {
  onFechar: () => void;
};

export default function PoliticaPrivacidadeModal({
  onFechar,
}: PoliticaPrivacidadeModalProps) {
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
      role='dialog'
      aria-modal='true'
      aria-labelledby='titulo-politica-privacidade'
      onClick={fecharAoClicarFora}
      className='
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/70 p-4
      '
    >
      <article
        className='
          relative max-h-[90vh]
          w-full max-w-2xl
          overflow-y-auto rounded-2xl
          border border-border
          bg-white p-6
          text-foreground shadow-2xl
          sm:p-8
        '
      >
        <button
          type='button'
          aria-label='Fechar Política de Privacidade'
          onClick={onFechar}
          className='
            absolute right-4 top-4
            flex h-11 w-11 items-center
            justify-center rounded-full
            text-2xl text-foreground
            transition-colors
            hover:bg-primary
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent
          '
        >
          ×
        </button>

        <header className='pr-12'>
          <p
            className='
              text-xs font-bold uppercase
              tracking-[0.15em] text-accent
            '
          >
            Privacidade
          </p>

          <h2
            id='titulo-politica-privacidade'
            className='
              mt-2 text-2xl font-bold
              text-foreground sm:text-3xl
            '
          >
            Política de Privacidade
          </h2>
        </header>

        <div className='mt-8 space-y-7 leading-relaxed text-muted'>
          <p>
            Esta Política de Privacidade explica como eu,{' '}
            <strong className='font-semibold text-foreground'>
              Ketlen Miranda
            </strong>
            , trato as informações no meu portfólio. Este é um site estático e
            informativo, focado na transparência e segurança de quem o visita.
          </p>

          <section aria-labelledby='politica-coleta'>
            <h3 id='politica-coleta' className='font-bold text-foreground'>
              1. Coleta de Dados
            </h3>

            <p className='mt-2'>
              Este site não realiza a coleta automática de dados pessoais,
              rastreamento de comportamento ou qualquer tipo de monitoramento de
              tráfego. Não existem formulários de cadastro ou bancos de dados
              integrados à navegação.
            </p>
          </section>

          <section aria-labelledby='politica-cookies'>
            <h3 id='politica-cookies' className='font-bold text-foreground'>
              2. Tecnologias e Cookies
            </h3>

            <p className='mt-2'>
              O site foi desenvolvido em React e não utiliza cookies ou qualquer
              tipo de tecnologia de armazenamento para salvar preferências de
              navegação.
            </p>
          </section>

          <section aria-labelledby='politica-interacao'>
            <h3 id='politica-interacao' className='font-bold text-foreground'>
              3. Interação e Contato
            </h3>

            <p className='mt-2'>
              As únicas informações que recebo são aquelas que você opta por
              enviar voluntariamente através dos canais de contato
              disponibilizados, como e-mail, LinkedIn, GitHub e Instagram.
            </p>
          </section>

          <section aria-labelledby='politica-terceiros'>
            <h3 id='politica-terceiros' className='font-bold text-foreground'>
              4. Links de Terceiros
            </h3>

            <p className='mt-2'>
              O portfólio contém links para plataformas externas, como Currículo
              Lattes e GitHub. Ao acessar esses links, você estará sujeito às
              políticas de privacidade de cada plataforma.
            </p>
          </section>

          <section aria-labelledby='politica-contato'>
            <h3 id='politica-contato' className='font-bold text-foreground'>
              5. Contato
            </h3>

            <p className='mt-2'>
              Dúvidas ou solicitações:{' '}
              <a
                href='mailto:ketlencostadev@gmail.com'
                className='
                  font-semibold text-accent
                  underline-offset-4
                  hover:underline
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                '
              >
                ketlencostadev@gmail.com
              </a>
              .
            </p>
          </section>

          <footer
            className='
              border-t border-border pt-5
              text-sm text-muted
            '
          >
            <p>
              Última atualização:{' '}
              <time dateTime='2026-09-02'>2 de setembro de 2026</time>.
            </p>
          </footer>
        </div>
      </article>
    </div>
  );
}
