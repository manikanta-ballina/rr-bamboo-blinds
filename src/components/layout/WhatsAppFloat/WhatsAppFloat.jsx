import { Icon } from '@/components/common';
import { CONTACT } from '@/constants/site';
import styles from './WhatsAppFloat.module.css';

/** Floating "chat on WhatsApp" action button. */
function WhatsAppFloat() {
  return (
    <a
      className={styles.float}
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <Icon name="whatsapp" size={30} />
    </a>
  );
}

export default WhatsAppFloat;
