type SectionTitleProps = {
  id: string;
  title: string;
};

export default function SectionTitle({ id, title }: SectionTitleProps) {
  return (
    <h2
      id={id}
      className='
        mx-auto w-fit max-w-full
        border-2 border-surface-dark
        px-4 py-3
        text-center text-base font-bold
        uppercase tracking-[0.2em]
        text-foreground
        sm:border-4 sm:px-8 sm:py-4
        sm:text-xl sm:tracking-[0.35em]
      '
    >
      {title}
    </h2>
  );
}
