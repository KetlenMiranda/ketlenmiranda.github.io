import certificadoEja from '../assets/certificados/pibic_eja/certificado.png';
import apresentacaoEja1 from '../assets/certificados/pibic_eja/apresentacao1.png';
import apresentacaoEja2 from '../assets/certificados/pibic_eja/apresentacao2.png';
import apresentacaoEja3 from '../assets/certificados/pibic_eja/apresentacao3.png';

import certificadoPandemia from '../assets/certificados/pibic_pandemia/certificado.png';
import apresentacaoPandemia1 from '../assets/certificados/pibic_pandemia/apresentacao1.png';
import apresentacaoPandemia2 from '../assets/certificados/pibic_pandemia/apresentacao2.png';
import apresentacaoPandemia3 from '../assets/certificados/pibic_pandemia/apresentacao3.png';

import certificadoTcc from '../assets/certificados/tcc/certificado_tcc.png';
import apresentacaoTcc from '../assets/certificados/tcc/apresentacao_tcc.png';
import bancaTcc from '../assets/certificados/tcc/tcc_banca.png';

export type DetalheCertificado = {
  rotulo: string;
  valor: string;
};

export type DestaqueCertificado = {
  descricao: string;
  link?: string;
};

export type FotoCertificado = {
  src: string;
  alt: string;
};

export type Certificado = {
  id: string;
  categoria: string;
  titulo: string;
  instituicao: string;
  imagem: string;
  linkCertificado?: string;
  detalhes: DetalheCertificado[];
  destaques: DestaqueCertificado[];
  fotos: FotoCertificado[];
};

export const certificados: Certificado[] = [
  {
    id: 'pibic-pandemia',
    categoria: 'Pesquisa acadêmica',
    titulo:
      'Impactos da pandemia (COVID-19) na vida escolar de meninas no Brasil: fatores históricos e sociais que interseccionam classe, gênero e raça',
    instituicao: 'Instituto Federal de Goiás — IFG',
    imagem: certificadoPandemia,
    detalhes: [
      {
        rotulo: 'Evento',
        valor: '15º Seminário de Iniciação Científica e Tecnológica — 2022',
      },
    ],
    destaques: [
      {
        descricao: 'Trabalho premiado no SICT Local do IFG.',
      },
      {
        descricao:
          'Publicação no Caderno Em.Formação, da Editora IFG — 20 de outubro de 2023.',
        link: 'https://periodicos.ifg.edu.br/sicti/article/view/1491/1176',
      },
    ],
    fotos: [
      {
        src: apresentacaoPandemia1,
        alt: 'Apresentação da pesquisa sobre os impactos da pandemia na vida escolar de meninas',
      },
      {
        src: apresentacaoPandemia2,
        alt: 'Registro da apresentação da pesquisa no SICT Local do IFG',
      },
      {
        src: apresentacaoPandemia3,
        alt: 'Apresentação do trabalho de iniciação científica no IFG',
      },
    ],
  },
  {
    id: 'pibic-eja',
    categoria: 'Pesquisa acadêmica',
    titulo:
      'As identidades tecnológicas do público EJA do Instituto Federal de Goiás, campus Formosa',
    instituicao: 'Instituto Federal de Goiás — IFG',
    imagem: certificadoEja,
    detalhes: [
      {
        rotulo: 'Apresentação em Goiânia',
        valor: 'Semana Nacional de Ciência e Tecnologia — SNCT 2024',
      },
      {
        rotulo: 'Apresentação em Formosa',
        valor: 'SECITEC — Câmpus Formosa do IFG',
      },
    ],
    destaques: [],
    fotos: [
      {
        src: apresentacaoEja1,
        alt: 'Apresentação da pesquisa sobre as identidades tecnológicas do público EJA',
      },
      {
        src: apresentacaoEja2,
        alt: 'Apresentação dos resultados da pesquisa durante a SNCT 2024',
      },
      {
        src: apresentacaoEja3,
        alt: 'Registro da apresentação da pesquisa sobre o público EJA do IFG',
      },
    ],
  },
  {
    id: 'tcc',
    categoria: 'Trabalho de Conclusão de Curso',
    titulo: 'Revisão Sistemática da Literatura Apoiada por Sistema Web',
    instituicao: 'Instituto Federal de Goiás — IFG',
    imagem: certificadoTcc,
    detalhes: [
      {
        rotulo: 'Tipo',
        valor: 'Trabalho de Conclusão de Curso',
      },
      {
        rotulo: 'Curso',
        valor: 'Análise e Desenvolvimento de Sistemas',
      },
    ],
    destaques: [],
    fotos: [
      {
        src: apresentacaoTcc,
        alt: 'Apresentação do Trabalho de Conclusão de Curso',
      },
      {
        src: bancaTcc,
        alt: 'Registro da banca de avaliação do Trabalho de Conclusão de Curso',
      },
    ],
  },
];
