import { jardimInterativo } from './jardimInterativo';
import { methodusRsl } from './methodusRsl';
import { shiftbreak } from './shiftbreak';

import type { Projeto } from './tipos';

export type {
  DetalheProjeto,
  FotoProjeto,
  LinkProjeto,
  Projeto,
} from './tipos';

export { jardimInterativo, methodusRsl, shiftbreak };

/** Ordem de exibição dos projetos na seção "Projetos". */
export const projetos: Projeto[] = [methodusRsl, jardimInterativo, shiftbreak];
