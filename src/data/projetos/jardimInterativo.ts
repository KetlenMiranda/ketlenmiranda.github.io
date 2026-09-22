import capaJardim from '../../assets/projetos/jardimInterativo/jardim_interativo.png';

import type { Projeto } from './tipos';

export const jardimInterativo: Projeto = {
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
};
