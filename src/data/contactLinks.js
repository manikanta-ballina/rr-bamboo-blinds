import { CONTACT } from '@/constants/site';

/**
 * Contact channels rendered in the Contact section.
 * `icon` must match a key in the Icon component; `variant` maps to a colour style.
 */
export const CONTACT_LINKS = [
  {
    id: 'phone',
    icon: 'phone',
    variant: 'phone',
    label: 'Mobile',
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
  },
  {
    id: 'whatsapp',
    icon: 'whatsapp',
    variant: 'whatsapp',
    label: 'WhatsApp',
    value: CONTACT.phoneDisplay,
    href: CONTACT.whatsappUrl,
    external: true,
  },
  {
    id: 'email',
    icon: 'mail',
    variant: 'mail',
    label: 'Email',
    value: CONTACT.email,
    href: CONTACT.emailHref,
  },
  {
    id: 'instagram',
    icon: 'insta',
    variant: 'instagram',
    label: 'Instagram',
    value: CONTACT.instagramHandle,
    href: CONTACT.instagramUrl,
    external: true,
  },
  {
    id: 'location',
    icon: 'pin',
    variant: 'location',
    label: 'Location',
    value: 'Get directions',
    href: CONTACT.directionsUrl,
    external: true,
  },
];
