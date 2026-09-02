import type { Certificado } from '../../data/certificadosData';

type CertificadoCardProps = {
  certificado: Certificado;
  onVerDetalhes: (certificado: Certificado) => void;
};

export default function CertificadoCard({
  certificado,
  onVerDetalhes,
}: CertificadoCardProps) {
  const tituloId = `titulo-certificado-${certificado.id}`;
  const acaoId = `acao-certificado-${certificado.id}`;

  return (
    <li>
      <article
        className='
          group relative flex h-full flex-col
          overflow-hidden rounded-xl
          border border-border bg-white/60
          shadow-sm transition-all duration-200
          hover:-translate-y-1 hover:shadow-md
        '
      >
        <img
          src={certificado.imagem}
          alt={`Certificado relacionado à pesquisa ${certificado.titulo}`}
          loading='lazy'
          className='
            h-44 w-full bg-white p-3
            object-contain
          '
        />

        <div className='flex flex-1 flex-col p-5'>
          <p
            className='
            text-xs font-bold uppercase
            tracking-[0.15em] text-accent
          '
          >
            {certificado.categoria}
          </p>

          <h3
            id={tituloId}
            className='
              mt-2 text-base font-bold
              leading-snug text-foreground
            '
          >
            {certificado.titulo}
          </h3>

          <p className='mt-3 text-sm font-semibold text-accent'>
            {certificado.instituicao}
          </p>

          <span
            aria-hidden='true'
            className='
              mt-auto pt-5 text-sm
              font-semibold text-accent
              group-hover:underline
            '
          >
            Ver detalhes →
          </span>
        </div>

        <button
          type='button'
          aria-haspopup='dialog'
          aria-controls={`modal-certificado-${certificado.id}`}
          aria-labelledby={`${acaoId} ${tituloId}`}
          onClick={() => onVerDetalhes(certificado)}
          className='
            absolute inset-0 z-10
            cursor-pointer rounded-xl
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent
            focus-visible:ring-offset-2
          '
        >
          <span id={acaoId} className='sr-only'>
            Ver detalhes da pesquisa
          </span>
        </button>
      </article>
    </li>
  );
}
