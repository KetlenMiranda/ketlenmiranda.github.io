export type LinkNavegacao = {
  texto: string;
  href: string;
  destaque?: boolean;
  exibirNoRodape?: boolean;
};

export const linksNavegacao: LinkNavegacao[] = [
  {
    texto: 'Início',
    href: '#inicio',
    exibirNoRodape: true,
  },
  {
    texto: 'Sobre mim',
    href: '#sobre-mim',
    exibirNoRodape: true,
  },
  {
    texto: 'Habilidades',
    href: '#habilidades',
    exibirNoRodape: true,
  },
  {
    texto: 'Certificados',
    href: '#certificados',
    exibirNoRodape: true,
  },
  {
    texto: 'Projetos',
    href: '#projetos',
    exibirNoRodape: true,
  },
  {
    texto: 'Contato',
    href: '#contato',
    destaque: true,
    exibirNoRodape: false,
  },
];
