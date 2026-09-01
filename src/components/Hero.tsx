import fotoHero from '../assets/Hero/fotoHero.png';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <section
      id='inicio'
      aria-labelledby='titulo-hero'
      className='
        min-h-[calc(100vh-3.5rem)] w-full
        border-b-4 border-surface-dark
        bg-primary
        md:border-b-[8px]
      '
    >
      <div
        className='
          grid min-h-[calc(100vh-3.5rem)] w-full
          md:grid-cols-[45%_55%]
        '
      >
        <div className='flex flex-col px-6 py-8 sm:px-10 md:px-16'>
          <div
            className='
              flex flex-1 flex-col
              items-center justify-center text-center
              md:-translate-y-6
              md:items-start md:text-left
            '
          >
            <p className='mb-2 text-lg font-semibold text-muted sm:text-xl'>
              Hi, I am
            </p>

            <h1
              id='titulo-hero'
              className='
                text-4xl font-bold text-foreground
                sm:text-5xl lg:text-6xl
              '
            >
              Ketlen Miranda
            </h1>

            <p className='mt-5 text-base font-semibold text-muted sm:text-lg'>
              Desenvolvedora Full Stack
            </p>

            <div
              className='
                mt-10 flex w-full flex-col
                items-center gap-4
                sm:w-auto sm:flex-row
              '
            >
              <a
                href='#projetos'
                className='
                  inline-flex min-h-12 w-full
                  items-center justify-center
                  rounded-lg bg-accent px-8 py-3
                  font-semibold text-white
                  shadow-sm transition-all duration-200
                  hover:bg-accent/90 hover:shadow-md
                  active:scale-95
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                  focus-visible:ring-offset-2
                  sm:w-auto
                '
              >
                Ver projetos
              </a>

              <a
                href='/curriculo-ketlen-miranda.pdf'
                download
                className='
                  inline-flex min-h-12 w-full
                  items-center justify-center gap-2
                  rounded-lg px-5 py-3
                  font-semibold text-accent
                  transition-colors duration-200
                  hover:bg-accent/10
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                  focus-visible:ring-offset-2
                  sm:w-auto
                '
              >
                ↓ Baixar currículo
              </a>
            </div>

            <SocialLinks />
          </div>
        </div>

        <div
          className='
            flex min-h-80 items-end justify-center
            overflow-hidden bg-surface-dark
            md:min-h-full
            md:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]
          '
        >
          <img
            src={fotoHero}
            alt='Retrato de Ketlen Miranda'
            className='
              max-h-[32rem] w-full
              object-contain object-bottom
              md:max-h-[calc(100vh-3.5rem)]
            '
          />
        </div>
      </div>
    </section>
  );
}
