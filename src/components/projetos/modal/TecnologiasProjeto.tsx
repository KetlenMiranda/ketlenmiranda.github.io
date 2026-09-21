import type { Projeto } from '../../../data/projetosData';

import TituloSecaoModal from './TituloSecaoModal';

type TecnologiasProjetoProps = {
  projeto: Projeto;
};

export default function TecnologiasProjeto({
  projeto,
}: TecnologiasProjetoProps) {
  if (projeto.tecnologias.length === 0) {
    return null;
  }

  return (
    <section>
      <TituloSecaoModal>Tecnologias</TituloSecaoModal>

      <ul className='mt-4 flex flex-wrap gap-2'>
        {projeto.tecnologias.map((tecnologia) => (
          <li
            key={tecnologia}
            className='
              rounded-full border border-accent
              px-4 py-2 text-sm
              font-semibold text-accent
            '
          >
            {tecnologia}
          </li>
        ))}
      </ul>
    </section>
  );
}
