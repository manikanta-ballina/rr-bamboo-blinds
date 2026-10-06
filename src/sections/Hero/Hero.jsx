import { useRef, useState } from 'react';
import clsx from 'clsx';
import { Button, Container, Icon, Slider } from '@/components/common';
import { HERO_SLIDES, HOME_FEATURES } from '@/data';
import { CONTACT, SECTION_IDS } from '@/constants/site';
import { scrollToSection } from '@/utils/scroll';
import styles from './Hero.module.css';

function Hero() {
  const sliderRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const selectFeature = (index) => {
    setActiveFeature(index);
    sliderRef.current?.goTo(index);
  };

  return (
    <section id={SECTION_IDS.home} className={styles.hero}>
      <Container className={styles.grid}>
        <div>
          <span className={styles.eyebrow}>
            <Icon name="leaf" size={14} /> 100% natural bamboo
          </span>
          <h1 className={styles.title}>
            Bamboo Blinds,
            <br />
            natural &amp; elegant.
          </h1>
          <p className={styles.lead}>
            Woven from pure natural bamboo slats, our blinds shade, cool and freshen every room —
            while keeping out rain and giving you the privacy your windows need.
          </p>

          <div className={styles.features} role="tablist" aria-label="Blind benefits">
            {HOME_FEATURES.map((feature, index) => {
              const isActive = index === activeFeature;
              return (
                <button
                  key={feature.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={clsx(styles.pill, isActive && styles.pillActive)}
                  onClick={() => selectFeature(index)}
                >
                  <Icon name={feature.icon} size={15} /> {feature.label}
                </button>
              );
            })}
          </div>

          <div className={styles.actions}>
            <Button onClick={() => scrollToSection(SECTION_IDS.products)}>View all products</Button>
            <Button variant="ghost" href={CONTACT.phoneHref}>
              <Icon name="phone" size={16} /> Call {CONTACT.phoneDisplay}
            </Button>
          </div>
        </div>

        <Slider ref={sliderRef} slides={HERO_SLIDES} />
      </Container>
    </section>
  );
}

export default Hero;
