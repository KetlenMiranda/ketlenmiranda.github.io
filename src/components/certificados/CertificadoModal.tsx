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
    href={certificado.linkCertificado ?? certificado.capa}
    target='_blank'
    rel='noreferrer'
    aria-label={`Ver certificado: ${certificado.titulo}`}
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
</div>;
