import { useLayoutEffect } from 'react';

/**
 * Prevents the page from scrolling behind a modal while `locked` is true.
 * @param {boolean} locked
 */
export function useLockBodyScroll(locked) {
  useLayoutEffect(() => {
    if (!locked) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}
