import { Container, SectionHeader } from '@/components/common';
import { brandImages } from '@/assets/images';
import { CONTACT_LINKS } from '@/data';
import { CONTACT, SECTION_IDS, SITE } from '@/constants/site';
import ContactLink from './ContactLink';
import BambooGrove from './BambooGrove';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section id={SECTION_IDS.contact} className={styles.section}>
      <img className={styles.blindPhoto} src={brandImages.blindDuo} alt="" aria-hidden="true" />
      <BambooGrove />

      <Container className={styles.content}>
        <SectionHeader
          onDark
          tag="Get in touch"
          title="Let's fit your windows"
          description={`Call or message us for a free measurement and quote — we serve homes and offices across ${SITE.serviceArea}.`}
        />

        <div className={styles.grid}>
          <div>
            <div className={styles.phone}>{CONTACT.phoneDisplay}</div>
            <div className={styles.phoneSub}>Available for calls &amp; WhatsApp, {SITE.hours}</div>
            <div className={styles.links}>
              {CONTACT_LINKS.map(({ id, ...link }) => (
                <ContactLink key={id} {...link} />
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{SITE.name}</h3>
            <ul className={styles.cardList}>
              <li>
                <b>Mats and curtains</b> — plain bamboo blinds, mats and curtains made to order
              </li>
              <li>
                <b>Phone</b> — {CONTACT.phoneDisplay}
              </li>
              <li>
                <b>Service area</b> — {SITE.serviceArea}
              </li>
              <li>
                <b>Hours</b> — {SITE.hours}, {SITE.hoursNote}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
