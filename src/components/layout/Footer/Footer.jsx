import { CONTACT, SITE } from '@/constants/site';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      © {year} {SITE.name} — {SITE.tagline} · {CONTACT.phoneDisplay}
    </footer>
  );
}

export default Footer;
