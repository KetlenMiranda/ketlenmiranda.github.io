import type { Projeto } from '../../../data/projetosData';

import TituloSecaoModal from './TituloSecaoModal';

type FuncionalidadesProjetoProps = {
  projeto: Projeto;
};

export default function FuncionalidadesProjeto({
  projeto,
}: FuncionalidadesProjetoProps) {
  if (projeto.funcionalidades.length === 0) {
    return null;
  }

  return (
    <section>
      <TituloSecaoModal>Principais funcionalidades</TituloSecaoModal>

      <ul className='mt-4 space-y-3'>
        {projeto.funcionalidades.map((funcionalidade) => (
          <li
            key={funcionalidade}
            className='
              flex items-start gap-3
              text-sm leading-relaxed text-muted
            '
          >
            <span
              aria-hidden='true'
              className='
                mt-2 h-2 w-2 shrink-0
                rounded-full bg-accent
              '
            />

            <span>{funcionalidade}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
