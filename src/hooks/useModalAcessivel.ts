import { useEffect } from 'react';

/**
 * Bloqueia a rolagem da página enquanto o modal está aberto e
 * fecha o modal quando a tecla Esc é pressionada.
 */
export default function useModalAcessivel(onFechar: () => void) {
  useEffect(() => {
    const overflowAnterior = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    function fecharComEsc(evento: KeyboardEvent) {
      if (evento.key === 'Escape') {
        onFechar();
      }
    }

    window.addEventListener('keydown', fecharComEsc);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener('keydown', fecharComEsc);
    };
  }, [onFechar]);
}
