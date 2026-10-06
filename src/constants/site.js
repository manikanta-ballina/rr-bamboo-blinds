/**
 * Business / site-wide constants.
 * Change contact details here and they update everywhere.
 */
const PHONE_E164 = '+919398970747';

export const SITE = Object.freeze({
  name: 'RR Bamboo Blinds',
  tagline: 'Mats & Curtains',
  serviceArea: 'Andhra Pradesh',
  hours: '9 AM – 8 PM',
  hoursNote: 'all days',
});

export const CONTACT = Object.freeze({
  phoneDisplay: '+91 93989 70747',
  phoneHref: `tel:${PHONE_E164}`,
  whatsappUrl: `https://wa.me/${PHONE_E164.replace('+', '')}`,
  email: 'rrbambooblinds@gmail.com',
  emailHref: 'mailto:rrbambooblinds@gmail.com',
  instagramHandle: '@rrbambooblinds',
  instagramUrl: 'https://www.instagram.com/rrbambooblinds/',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=RR+Bamboo+Blinds+Andhra+Pradesh',
});

export const SECTION_IDS = Object.freeze({
  home: 'home',
  products: 'products',
  work: 'work',
  contact: 'contact',
});

/** Offset (px) used when detecting the active nav section while scrolling. */
export const SCROLL_SPY_OFFSET = 140;

/** How many installations to show before the "Show more" tile. */
export const WORK_PREVIEW_COUNT = 5;

/** How many reviews to show before "See all reviews". */
export const REVIEW_PREVIEW_COUNT = 3;
