import { featureImages } from '@/assets/images';

/**
 * Hero feature pills. Each entry doubles as a hero slide.
 * `icon` must match a key in the Icon component.
 */
export const HOME_FEATURES = [
  {
    id: 'rain',
    icon: 'rain',
    label: 'Rain protection',
    img: featureImages.rain,
    title: 'Rain Protection',
    sub: 'No rain passes — keeps your space dry',
  },
  {
    id: 'sun',
    icon: 'sun',
    label: 'Sunlight control',
    img: featureImages.sun,
    title: 'Sun Resistant',
    sub: 'Blocks harsh UV rays, keeps things cool',
  },
  {
    id: 'dust',
    icon: 'dust',
    label: 'Dust resistant',
    img: featureImages.dust,
    title: 'Dust & Glare Reduction',
    sub: 'Cuts glare and keeps dust out',
  },
  {
    id: 'heat',
    icon: 'thermo',
    label: 'Heat reduction',
    img: featureImages.heat,
    title: 'Heat Reduction',
    sub: 'Cooler indoors even at 40°C+ outside',
  },
  {
    id: 'ventilation',
    icon: 'wind',
    label: 'Ventilation',
    img: featureImages.ventilation,
    title: 'Ventilation',
    sub: 'Natural gaps let fresh air circulate',
  },
  {
    id: 'privacy',
    icon: 'shield',
    label: 'Privacy',
    img: featureImages.privacy,
    title: 'Privacy + Protection',
    sub: 'Blocks outside view, total privacy',
  },
];

export const HERO_SLIDES = HOME_FEATURES.map(({ id, img, title, sub }) => ({
  id,
  img,
  title,
  sub,
}));
