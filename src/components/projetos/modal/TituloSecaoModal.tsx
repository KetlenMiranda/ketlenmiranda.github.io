type TituloSecaoModalProps = {
  id?: string;
  children: string;
};

export default function TituloSecaoModal({
  id,
  children,
}: TituloSecaoModalProps) {
  return (
    <h3
      id={id}
      className='
        text-sm font-bold uppercase
        tracking-[0.15em] text-foreground
      '
    >
      {children}
    </h3>
  );
}
