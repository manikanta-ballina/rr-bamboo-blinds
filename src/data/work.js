import { workImages } from '@/assets/images';

/** Helper: build slides for an installation from its image list + captions. */
const toSlides = (title, images, captions) =>
  images.map((img, index) => ({
    id: `${title}-${index}`,
    img,
    title,
    sub: captions[index],
  }));

export const WORK_ITEMS = [
  {
    id: 'residential-balcony',
    title: 'Residential Balcony',
    sub: 'Teal shade blinds installation',
    slides: toSlides('Residential Balcony', workImages.residentialBalcony, [
      'Teal blinds, full balcony width',
      'Close-up view',
      'Street-side view',
    ]),
  },
  {
    id: 'courtyard-pergola',
    title: 'Courtyard Pergola',
    sub: 'Bamboo blind installation in progress',
    slides: toSlides('Courtyard Pergola', workImages.courtyardPergola, [
      'Fitting the bamboo blinds',
      'Corner view',
      'Wide courtyard view',
      'Installation underway',
      'Team at work',
    ]),
  },
  {
    id: 'garden-courtyard',
    title: 'Garden Courtyard',
    sub: 'Dark green blinds around a courtyard',
    slides: toSlides('Garden Courtyard', workImages.gardenCourtyard, [
      'Full courtyard, dark green blinds',
    ]),
  },
  {
    id: 'commercial-building',
    title: 'Commercial Building',
    sub: 'Multi-floor blue blind installation',
    slides: toSlides('Commercial Building', workImages.commercialBuilding, [
      'Full building view',
      'Angled street view',
    ]),
  },
  {
    id: 'balcony-blinds',
    title: 'Balcony Blinds',
    sub: 'Blue blinds with classic balustrade',
    slides: toSlides('Balcony Blinds', workImages.balconyBlinds, [
      'Balcony, full set',
      'Side angle',
    ]),
  },
  {
    id: 'home-windows',
    title: 'Home Windows',
    sub: 'Navy blinds on window openings',
    slides: toSlides('Home Windows', workImages.homeWindows, [
      'Front windows',
      'Side windows',
      'Wide view',
    ]),
  },
  {
    id: 'terrace-blinds',
    title: 'Terrace Blinds',
    sub: 'Olive-tone fabric blind installation',
    slides: toSlides('Terrace Blinds', workImages.terraceBlinds, [
      'Terrace wall view',
      'Close-up',
      'Full gazebo view',
    ]),
  },
  {
    id: 'rooftop-room',
    title: 'Rooftop Room',
    sub: 'Bamboo blinds on an open rooftop',
    slides: toSlides('Rooftop Room', workImages.rooftopRoom, ['Open rooftop room']),
  },
];
