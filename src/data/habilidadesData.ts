import type { IconType } from 'react-icons';

import { FaCss3Alt } from 'react-icons/fa';

import {
  SiBootstrap,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

import { TbApi } from 'react-icons/tb';

export type Habilidade = {
  nome: string;
  icone: IconType;
  cor: string;
};

export type GrupoHabilidades = {
  id: string;
  titulo: string;
  habilidades: Habilidade[];
};

export const gruposHabilidades: GrupoHabilidades[] = [
  {
    id: 'front-end',
    titulo: 'Front-end',
    habilidades: [
      {
        nome: 'HTML5',
        icone: SiHtml5,
        cor: '#E34F26',
      },
      {
        nome: 'CSS3',
        icone: FaCss3Alt,
        cor: '#1572B6',
      },
      {
        nome: 'JavaScript',
        icone: SiJavascript,
        cor: '#F7DF1E',
      },
      {
        nome: 'TypeScript',
        icone: SiTypescript,
        cor: '#3178C6',
      },
      {
        nome: 'React',
        icone: SiReact,
        cor: '#61DAFB',
      },
      {
        nome: 'Tailwind',
        icone: SiTailwindcss,
        cor: '#06B6D4',
      },
      {
        nome: 'Bootstrap',
        icone: SiBootstrap,
        cor: '#7952B3',
      },
    ],
  },
  {
    id: 'back-end',
    titulo: 'Back-end',
    habilidades: [
      {
        nome: 'PHP',
        icone: SiPhp,
        cor: '#777BB4',
      },
      {
        nome: 'Laravel',
        icone: SiLaravel,
        cor: '#FF2D20',
      },
      {
        nome: 'APIs REST',
        icone: TbApi,
        cor: '#5F5964',
      },
    ],
  },
  {
    id: 'ferramentas-dados',
    titulo: 'Ferramentas e dados',
    habilidades: [
      {
        nome: 'MySQL',
        icone: SiMysql,
        cor: '#4479A1',
      },
      {
        nome: 'Git',
        icone: SiGit,
        cor: '#F05032',
      },
      {
        nome: 'GitHub',
        icone: SiGithub,
        cor: '#181717',
      },
      {
        nome: 'Docker',
        icone: SiDocker,
        cor: '#2496ED',
      },
      {
        nome: 'Vite',
        icone: SiVite,
        cor: '#646CFF',
      },
      {
        nome: 'Figma',
        icone: SiFigma,
        cor: '#F24E1E',
      },
    ],
  },
];

export const conhecimentosComplementares = [
  'SOLID',
  'MVC',
  'Design Patterns',
  'Kanban',
  'Deploy básico',
];
