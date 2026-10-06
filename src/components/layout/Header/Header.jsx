import { useState } from 'react';
import clsx from 'clsx';
import { Icon } from '@/components/common';
import { brandImages } from '@/assets/images';
import { NAV_ITEMS, NAV_SECTION_IDS } from '@/data';
import { SECTION_IDS, SITE } from '@/constants/site';
import { useActiveSection } from '@/hooks';
import { scrollToSection } from '@/utils/scroll';
import styles from './Header.module.css';

/** Sticky site header with scroll-spy navigation and a mobile menu. */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAV_SECTION_IDS);

  const handleNavigate = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.brand}
          onClick={() => handleNavigate(SECTION_IDS.home)}
          aria-label={`${SITE.name} home`}
        >
          <img className={styles.logo} src={brandImages.logo} alt="" width={52} height={52} />
          <span className={styles.brandText}>
            <b className={styles.brandName}>{SITE.name}</b>
            <span className={styles.brandTagline}>{SITE.tagline}</span>
          </span>
        </button>

        <nav className={styles.navLinks} aria-label="Primary">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={clsx(styles.navLink, activeSection === id && styles.navLinkActive)}
              onClick={() => handleNavigate(id)}
              aria-current={activeSection === id ? 'page' : undefined}
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className={styles.burger}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <Icon name="menu" />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={clsx(styles.mobileMenu, isMenuOpen && styles.mobileMenuOpen)}
        aria-label="Mobile"
      >
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={clsx(styles.mobileLink, activeSection === id && styles.mobileLinkActive)}
            onClick={() => handleNavigate(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
