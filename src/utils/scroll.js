/**
 * Smoothly scroll to a section by its DOM id.
 * @param {string} id
 */
export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
