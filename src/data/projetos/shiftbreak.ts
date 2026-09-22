import capaShiftbreak from '../../assets/projetos/shiftbreak/game_shiftbreak.png';
import poderChamas from '../../assets/projetos/shiftbreak/poder_chamas.png';

import type { Projeto } from './tipos';

export const shiftbreak: Projeto = {
  id: 'shiftbreak',

  categoria: 'Jogo digital',

  titulo: 'ShiftBreak',

  descricao:
    'Jogo de ação ágil focado em dominar o mesmo ambiente de trabalho de formas diferentes a cada nível. Desenvolvido em C# no s&box para a Game Jam III.',

  capa: capaShiftbreak,

  capaAlt: 'Cena de ação do jogo ShiftBreak dentro do escritório',

  detalhes: [
    {
      rotulo: 'Tipo',
      valor: 'Jogo single-player (1 jogador)',
    },
    {
      rotulo: 'Linguagem principal',
      valor: 'C#',
    },
    {
      rotulo: 'Engine',
      valor:
        'Desenvolvido no s&box (Facepunch Studios), que utiliza a Source 2 (Valve) como seu motor gráfico e tecnológico subjacente.',
    },
    {
      rotulo: 'Evento',
      valor: 'Game Jam III do s&box',
    },
    {
      rotulo: 'Plataforma',
      valor:
        'Disponível diretamente na plataforma s&box, que pode ser instalada pela Steam.',
    },
  ],

  tecnologias: ['C#', 's&box', 'Source 2'],

  funcionalidades: [
    'Combate de ação em ritmo acelerado contra inimigos dentro do escritório.',
    'Habilidades que mudam a forma de encarar cada situação.',
    'Níveis que reaproveitam o mesmo ambiente com desafios diferentes.',
    'Progressão que incentiva testar novas rotas e estratégias a cada tentativa.',
  ],

  links: [
    {
      rotulo: 'Ver página no s&box',
      url: 'https://sbox.game/overnightgames/shiftbreak',
    },
  ],

  demonstracao: 'https://www.youtube.com/embed/wKOfiSZ9o5Q',

  demonstracaoTitulo: 'Demonstração do jogo',

  demonstracaoDescricao:
    'Trailer da versão enviada para a Game Jam III do s&box. Recomendado assistir com som.',

  fotosTitulo: 'Imagens do jogo',

  fotos: [
    {
      src: capaShiftbreak,
      alt: 'Cena de ação do jogo ShiftBreak dentro do escritório',
    },
    {
      src: poderChamas,
      alt: 'Personagem de ShiftBreak usando o poder de chamas contra os inimigos',
    },
  ],
};
