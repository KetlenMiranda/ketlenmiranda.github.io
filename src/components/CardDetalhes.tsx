type CardDetalhesProps = {
  id: string;
  categoria: string;
  titulo: string;
  capa: string;
  capaAlt: string;
  modalId: string;
  modoImagem?: 'contain' | 'cover';
  onVerDetalhes: () => void;
};

export default function CardDetalhes({
  id,
  categoria,
  titulo,
  capa,
  capaAlt,
  modalId,
  modoImagem = 'cover',
  onVerDetalhes,
}: CardDetalhesProps) {
  const tituloId = `titulo-card-${id}`;

  const estiloImagem =
    modoImagem === 'contain' ? 'object-contain p-3' : 'object-cover';

  return (
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
        src={capa}
        alt={capaAlt}
        loading='lazy'
        className={`
          h-44 w-full bg-white
          ${estiloImagem}
        `}
      />

      <div className='flex flex-1 flex-col p-5'>
        <p
          className='
            text-xs font-bold uppercase
            tracking-[0.15em] text-accent
          '
        >
          {categoria}
        </p>

        <h3
          id={tituloId}
          className='
            mt-2 text-base font-bold
            leading-snug text-foreground
          '
        >
          {titulo}
        </h3>

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
        aria-controls={modalId}
        aria-label={`Ver detalhes de ${titulo}`}
        onClick={onVerDetalhes}
        className='
          absolute inset-0 z-10
          cursor-pointer rounded-xl
          bg-transparent
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-accent
          focus-visible:ring-offset-2
        '
      />
    </article>
  );
}
