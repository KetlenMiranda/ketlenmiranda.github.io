type SectionTitleProps = {
  id: string;
  title: string;
};

export default function SectionTitle({ id, title }: SectionTitleProps) {
  return (
    <h2
      id={id}
      className='
        mx-auto w-fit
        border-2 border-surface-dark
        px-8 py-4
        text-center text-xl font-bold
        uppercase tracking-[0.35em]
        text-foreground
        sm:border-4 sm:px-12 sm:text-2xl
      '
    >
      {title}
    </h2>
  );
}
