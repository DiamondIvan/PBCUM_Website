import { useEffect, useRef } from 'react';

const focusable = 'a[href], button, input, select, textarea, [tabindex]';

export function useModalInteraction(dialogRef, closeRef, onClose, enabled = true) {
  const close = useRef(onClose);

  useEffect(() => {
    close.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!enabled || !dialog) return undefined;

    const trigger = document.activeElement;
    const app = document.getElementById('root');
    const previousInert = app.inert;
    const previousOverflow = document.body.style.overflow;

    app.inert = true;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close.current();
        return;
      }
      if (event.key !== 'Tab') return;

      const stops = [...dialog.querySelectorAll(focusable)].filter(
        (el) => el.tabIndex >= 0 && !el.matches(':disabled') && el.getClientRects().length > 0,
      );
      if (stops.length === 0) {
        event.preventDefault();
        return;
      }
      const first = stops[0];
      const last = stops[stops.length - 1];
      if (!dialog.contains(document.activeElement) || document.activeElement === (event.shiftKey ? first : last)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      app.inert = previousInert;
      if (trigger?.isConnected && (dialog.contains(document.activeElement) || document.activeElement === document.body)) {
        trigger.focus({ preventScroll: true });
      }
    };
  }, [dialogRef, closeRef, enabled]);
}
