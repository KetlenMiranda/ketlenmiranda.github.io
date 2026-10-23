import capaLegacyOfPirates from '../../assets/projetos/legacyOfPirates/capa_legacy_of_pirates.jpg';
import esqueletosPiratas from '../../assets/projetos/legacyOfPirates/esqueletos_piratas.jpg';
import navioPirata from '../../assets/projetos/legacyOfPirates/navio_pirata.jpg';

import type { Projeto } from './tipos';

export const legacyOfPirates: Projeto = {
  id: 'legacy-of-pirates',

  categoria: 'Jogo de ação 3D',

  titulo: 'Legacy of Pirates',

  descricao:
    'Roguelite de sobrevivência cooperativo para 1 a 8 jogadores, onde você explora uma ilha amaldiçoada gerada proceduralmente, coleta recursos, cria itens, constrói, adquire poderes e enfrenta inimigos cada vez mais perigosos.',

  capa: capaLegacyOfPirates,

  capaAlt: 'Logotipo do jogo Legacy of Pirates sobre uma floresta noturna com esqueletos piratas',

  detalhes: [
    {
      rotulo: 'Tipo',
      valor: 'Roguelite de sobrevivência cooperativo (1 a 8 jogadores)',
    },
    {
      rotulo: 'Atuação',
      valor: 'Desenvolvimento de mecânicas e gameplay',
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
      rotulo: 'Plataforma',
      valor:
        'Disponível diretamente na plataforma s&box, que pode ser instalada pela Steam.',
    },
  ],

  tecnologias: ['C#', 's&box', 'Blender'],

  funcionalidades: [
    'Soluções na interface de usuário utilizando a arquitetura MVVM.',
    'Padrão Object Pooling para reduzir os gargalos de alocação na criação de novos objetos.',
    'Strategy pattern em diversas funcionalidades para flexibilizar as mudanças de comportamentos.',
    'Recursos delegados para criar lógicas reativas.',
  ],

  links: [
    {
      rotulo: 'Ver página no s&box',
      url: 'https://sbox.game/overnightgames/legacyofpirates',
    },
  ],

  fotosTitulo: 'Imagens do jogo',

  fotos: [
    {
      src: esqueletosPiratas,
      alt: 'Esqueletos piratas armados com sabres atacando o jogador em uma noite chuvosa na ilha',
    },
    {
      src: navioPirata,
      alt: 'Navio com velas rasgadas navegando próximo à praia da ilha em Legacy of Pirates',
    },
  ],
};
