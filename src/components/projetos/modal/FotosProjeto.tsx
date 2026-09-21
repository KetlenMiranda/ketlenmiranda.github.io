import type { Projeto } from '../../../data/projetosData';

import TituloSecaoModal from './TituloSecaoModal';

type FotosProjetoProps = {
  projeto: Projeto;
};

export default function FotosProjeto({ projeto }: FotosProjetoProps) {
  if (projeto.fotos.length === 0) {
    return null;
  }

  const tituloId = `fotos-projeto-${projeto.id}`;

  return (
    <section aria-labelledby={tituloId} className='border-t border-border pt-8'>
      <TituloSecaoModal id={tituloId}>Imagens do sistema</TituloSecaoModal>

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
  );
}
