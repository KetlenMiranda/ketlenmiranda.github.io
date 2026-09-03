import {
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

export const linksSociais = [
  {
    nome: 'GitHub',
    href: 'https://github.com/KetlenMiranda',
    Icone: FaGithub,
    novaAba: true,
  },
  {
    nome: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ketlenmiranda/',
    Icone: FaLinkedin,
    novaAba: true,
  },
  {
    nome: 'Currículo Lattes',
    href: 'http://lattes.cnpq.br/0032401796220051',
    Icone: FaGraduationCap,
    novaAba: true,
  },
  {
    nome: 'E-mail',
    href: 'mailto:ketlencostadev@gmail.com',
    Icone: FaEnvelope,
    novaAba: false,
  },
  {
    nome: 'Instagram',
    href: 'https://www.instagram.com/ketlen.dev/',
    Icone: FaInstagram,
    novaAba: true,
  },
];

type SocialLinksProps = {
  tema?: 'claro' | 'escuro';
  className?: string;
};

export default function SocialLinks({
  tema = 'claro',
  className = 'mt-8',
}: SocialLinksProps) {
  const classesDeCor =
    tema === 'escuro'
      ? `
          border-accent text-white
          focus-visible:ring-offset-surface-dark
        `
      : `
          border-border text-foreground
          focus-visible:ring-offset-white
        `;

  const classesDeAlinhamento =
    tema === 'escuro' ? 'justify-center' : 'justify-center md:justify-start';

  return (
    <nav aria-label='Redes sociais' className={className}>
      <ul
        className={`
          flex flex-wrap gap-3
          ${classesDeAlinhamento}
        `}
      >
        {linksSociais.map((link) => {
          const Icone = link.Icone;

          return (
            <li key={link.nome}>
              <a
                href={link.href}
                target={link.novaAba ? '_blank' : undefined}
                rel={link.novaAba ? 'noopener noreferrer' : undefined}
                aria-label={`Acessar ${link.nome}`}
                title={link.nome}
                className={`
                  flex h-11 w-11 items-center
                  justify-center rounded-lg
                  border text-xl
                  transition-colors duration-200
                  hover:border-accent
                  hover:bg-accent
                  hover:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                  focus-visible:ring-offset-2
                  ${classesDeCor}
                `}
              >
                <Icone aria-hidden='true' />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
