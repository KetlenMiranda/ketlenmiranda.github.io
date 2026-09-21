type BotaoFecharModalProps = {
  onFechar: () => void;
};

export default function BotaoFecharModal({ onFechar }: BotaoFecharModalProps) {
  return (
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
  );
}
