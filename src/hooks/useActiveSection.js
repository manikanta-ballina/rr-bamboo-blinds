import { useEffect, useState } from 'react';
import { SCROLL_SPY_OFFSET } from '@/constants/site';

/**
 * Scroll-spy hook: returns the id of the section currently in view.
 * @param {string[]} sectionIds - ordered list of section element ids (pass a stable reference)
 * @returns {string} active section id
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const updateActive = () => {
      const position = window.scrollY + SCROLL_SPY_OFFSET;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= position) {
          current = id;
        }
      }

      setActiveId(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [sectionIds]);

  return activeId;
}
