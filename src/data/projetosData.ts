import capaMethodus from '../assets/projetos/methodus/telaMethodus.png';
import capaJardim from '../assets/projetos/jardimInterativo/jardim_interativo.png';

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
  instituicao?: string;
  capa: string;
  capaAlt: string;
  detalhes: DetalheProjeto[];
  tecnologias: string[];
  funcionalidades: string[];
  aviso?: string;
  repositorio?: string;
  demonstracao?: string;
  fotos: FotoProjeto[];
};

export const projetos: Projeto[] = [
  {
    id: 'methodus-rsl',

    categoria: 'Trabalho de Conclusão de Curso',

    titulo: 'Methodus RSL',

    descricao:
      'Sistema web desenvolvido para auxiliar pesquisadores na organização e documentação de Revisões Sistemáticas da Literatura.',

    instituicao: 'Instituto Federal de Goiás — IFG',

    capa: capaMethodus,

    capaAlt: 'Tela inicial do sistema Methodus RSL',

    detalhes: [
      {
        rotulo: 'Tipo',
        valor: 'Trabalho de Conclusão de Curso',
      },
      {
        rotulo: 'Área',
        valor: 'Desenvolvimento web e pesquisa acadêmica',
      },
      {
        rotulo: 'Objetivo',
        valor:
          'Apoiar pesquisadores durante a realização de Revisões Sistemáticas da Literatura',
      },
      {
        rotulo: 'Situação',
        valor: 'Proteção intelectual em andamento',
      },
    ],

    tecnologias: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Vite'],

    funcionalidades: [
      'Organização das etapas da Revisão Sistemática da Literatura.',
      'Registro e acompanhamento dos estudos analisados.',
      'Documentação das decisões tomadas durante a pesquisa.',
      'Geração de relatórios com os resultados da revisão.',
    ],

    aviso:
      'Algumas informações técnicas, imagens e partes do funcionamento do sistema foram preservadas durante o processo de proteção intelectual.',

    fotos: [
      {
        src: capaMethodus,
        alt: 'Tela inicial do sistema Methodus RSL',
      },
    ],
  },
  {
    id: 'jardim-interativo',
    categoria: 'Projeto acadêmico',
    titulo: 'Jardim Interativo',
    descricao:
      'Ambiente tridimensional interativo desenvolvido na disciplina de Computação Gráfica e Sistemas Multimídia.',
    instituicao: 'Instituto Federal de Goiás — IFG',
    capa: capaJardim,
    capaAlt: 'Cenário do Jardim Interativo',

    detalhes: [
      {
        rotulo: 'Tipo',
        valor: 'Projeto acadêmico',
      },
      {
        rotulo: 'Disciplina',
        valor: 'Computação Gráfica e Sistemas Multimídia',
      },
    ],

    tecnologias: ['Unity', 'C#', 'Blender'],

    funcionalidades: [
      'Exploração de um ambiente tridimensional.',
      'Navegação pelo jardim.',
      'Animações e elementos interativos.',
    ],

    demonstracao:
      'https://play.unity.com/en/games/7046d763-aac2-4836-94f8-c0c06e0a75bd/jardim-interativo',

    fotos: [],
  },
];
