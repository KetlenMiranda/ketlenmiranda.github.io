import capaMethodus from '../../assets/projetos/methodus/telaMethodus.png';

import type { Projeto } from './tipos';

export const methodusRsl: Projeto = {
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
};
