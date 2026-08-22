type MenuButtonProps = {
  menuAberto: boolean;
  onAlternar: () => void;
};

export default function MenuButton({
  menuAberto,
  onAlternar,
}: MenuButtonProps) {
  return (
    <button
      type="button"
      className="
        rounded p-2 text-white transition-colors
        hover:bg-white/10
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-white
        md:hidden
      "
      aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={menuAberto}
      aria-controls="menu-principal"
      onClick={onAlternar}
    >
      <span
        className="text-2xl leading-none"
        aria-hidden="true"
      >
        ☰
      </span>
    </button>
  );
}