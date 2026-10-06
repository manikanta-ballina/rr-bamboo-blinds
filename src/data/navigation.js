import { SECTION_IDS } from '@/constants/site';

export const NAV_ITEMS = [
  { id: SECTION_IDS.home, label: 'Home' },
  { id: SECTION_IDS.products, label: 'Products' },
  { id: SECTION_IDS.work, label: 'Work' },
  { id: SECTION_IDS.contact, label: 'Contact' },
];

/** Stable array of section ids (keeps hook deps referentially equal). */
export const NAV_SECTION_IDS = NAV_ITEMS.map((item) => item.id);
