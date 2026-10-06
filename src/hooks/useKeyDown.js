import { useEffect } from 'react';

/**
 * Runs `handler` whenever `key` is pressed anywhere in the window.
 * @param {string} key - e.g. "Escape"
 * @param {(event: KeyboardEvent) => void} handler
 * @param {boolean} [enabled=true]
 */
export function useKeyDown(key, handler, enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    const onKeyDown = (event) => {
      if (event.key === key) handler(event);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [key, handler, enabled]);
}
