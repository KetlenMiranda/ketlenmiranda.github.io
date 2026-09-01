import SectionTitle from './SectionTitle';

export default function Habilidades() {
  return (
    <section
      id="habilidades"
      aria-labelledby="titulo-habilidades"
      className="w-full bg-primary"
    >
      <div
        className="
          mx-auto w-full max-w-7xl
          px-6 py-16
          sm:px-10 sm:py-20
          md:px-16
        "
      >
        <div
          aria-hidden="true"
          className="mb-14 flex items-center justify-center gap-2"
        >
          <span className="h-0.5 w-7 bg-surface-dark" />

          <span className="font-bold tracking-[-0.2em] text-surface-dark">
            ⌄⌄⌄
          </span>

          <span className="h-0.5 w-7 bg-surface-dark" />
        </div>

        <SectionTitle
          id="titulo-habilidades"
          title="Habilidades"
        />

        <ul
          className="
            mx-auto mt-12 grid max-w-5xl
            grid-cols-1 gap-6
            md:grid-cols-2
          "
        >
          {/* As habilidades serão inseridas aqui */}
        </ul>
      </div>
    </section>
  );
}
