export type DetalheProjeto = {
  rotulo: string;
  valor: string;
};

export type FotoProjeto = {
  src: string;
  alt: string;
};

export type Projeto = {
  id: string;
  categoria: string;
  titulo: string;
  descricao: string;
  descricaoCompleta?: string[];
  instituicao?: string;
  capa: string;
  capaAlt: string;
  detalhes: DetalheProjeto[];
  tecnologias: string[];
  funcionalidades: string[];
  aviso?: string;
  repositorio?: string;
  demonstracao?: string;
  demonstracaoTitulo?: string;
  demonstracaoDescricao?: string;
  fotos: FotoProjeto[];
};
