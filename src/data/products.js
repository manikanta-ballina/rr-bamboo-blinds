import { featureImages, productImages } from '@/assets/images';

const { noSheet, singleSheet, doubleSheet } = productImages;

export const PRODUCTS = [
  {
    id: 'no-sheet',
    name: 'No Sheet Bamboo Blind',
    badge: 'Most Popular',
    description:
      'Our signature plain-weave bamboo blind — pure natural slats with no backing sheet, for the most authentic look and best airflow.',
    slides: [
      {
        id: 'plain',
        img: noSheet.plain,
        title: 'Plain Bamboo Blinds',
        sub: 'Natural look · Simple · Elegant',
      },
      {
        id: 'sun',
        img: noSheet.sunlight,
        title: 'Sunlight Control',
        sub: 'Filters harsh direct sun, lets soft light in',
      },
      {
        id: 'heat',
        img: featureImages.heat,
        title: 'Heat Reduction',
        sub: 'Cooler indoors even at 40°C+ outside',
      },
      {
        id: 'dust',
        img: featureImages.dust,
        title: 'Dust & Glare Reduction',
        sub: 'Cuts glare and keeps dust out',
      },
      {
        id: 'ventilation',
        img: featureImages.ventilation,
        title: 'Ventilation',
        sub: 'Natural gaps let fresh air circulate',
      },
      {
        id: 'all-in-one',
        img: noSheet.allInOne,
        title: 'All-in-One Protection',
        sub: 'Sunlight, dust, glare and heat — covered',
      },
    ],
  },
  {
    id: 'single-sheet',
    name: 'Single Sheet Bamboo Blind',
    badge: 'Balanced',
    description:
      'A light fabric backing sheet adds extra shade and privacy while keeping the natural bamboo texture on show.',
    slides: [
      {
        id: 'plain',
        img: singleSheet.plain,
        title: 'Single Sheet Blind',
        sub: 'Bamboo slats with a protective outer layer',
      },
      {
        id: 'layers',
        img: singleSheet.layers,
        title: 'Two-Layer Build',
        sub: 'Thick plastic cover outside, bamboo slats inside',
      },
      {
        id: 'rain',
        img: singleSheet.rain,
        title: 'Rain Resistant',
        sub: 'Stops rain from coming through',
      },
      {
        id: 'sun',
        img: singleSheet.sun,
        title: 'Sun Resistance',
        sub: 'Shields against sunlight, heat and UV rays',
      },
      {
        id: 'dust',
        img: singleSheet.dust,
        title: 'Dust Resistance',
        sub: 'Keeps dust and dirt out for a cleaner space',
      },
      {
        id: 'privacy',
        img: singleSheet.privacy,
        title: 'Privacy Protection',
        sub: 'Blocks outside view for complete privacy',
      },
    ],
  },
  {
    id: 'double-sheet',
    name: 'Double Sheet Bamboo Blind',
    badge: 'Max Privacy',
    description:
      'Two backing sheets give the fullest coverage and light control — ideal for bedrooms and street-facing windows.',
    slides: [
      {
        id: 'plain',
        img: doubleSheet.plain,
        title: 'Two Sheet Blind',
        sub: 'Bamboo core with a protective outer cover',
      },
      {
        id: 'layers',
        img: doubleSheet.layers,
        title: 'Three-Layer Build',
        sub: 'Plastic cover, bamboo core, plastic cover',
      },
      {
        id: 'rain',
        img: featureImages.rain,
        title: 'Rain Resistant',
        sub: 'No rain passes — keeps your space dry',
      },
      {
        id: 'sun',
        img: featureImages.sun,
        title: 'Sun Resistant',
        sub: 'Blocks harsh UV rays, keeps things cool',
      },
      {
        id: 'dust',
        img: doubleSheet.dust,
        title: 'Dust Resistant',
        sub: 'Blocks dust and dirt, even on roadside spaces',
      },
      {
        id: 'privacy',
        img: featureImages.privacy,
        title: 'Privacy Protection',
        sub: 'Blocks outside view, total privacy',
      },
      {
        id: 'colours',
        img: doubleSheet.multiColour,
        title: 'Multiple Colors',
        sub: 'Blue, green or brown — same protection',
      },
    ],
  },
];
