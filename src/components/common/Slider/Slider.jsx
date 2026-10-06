import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Icon from '@/components/common/Icon';
import styles from './Slider.module.css';

const DEFAULT_INTERVAL = 4200;

/**
 * Cross-fading image slider with optional autoplay, prev/next controls and dots.
 * Autoplay pauses permanently once the user navigates manually.
 *
 * Exposes `goTo(index)` through the forwarded ref.
 */
function SliderBase(
  { slides, variant = 'default', autoPlay = true, interval = DEFAULT_INTERVAL, onZoom, className },
  ref,
) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slides.length;

  const goTo = useCallback(
    (index) => {
      setCurrent(((index % total) + total) % total);
      setIsPaused(true);
    },
    [total],
  );

  useImperativeHandle(ref, () => ({ goTo }), [goTo]);

  useEffect(() => {
    if (!autoPlay || isPaused || total < 2) return undefined;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, total]);

  const showControls = total > 1;

  return (
    <div className={clsx(styles.slider, styles[variant], className)}>
      {slides.map((slide, index) => {
        const isActive = index === current;
        const image = (
          <img
            className={styles.image}
            src={slide.img}
            alt={slide.title}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        );

        return (
          <div
            key={slide.id ?? index}
            className={clsx(styles.slide, isActive && styles.slideActive)}
            aria-hidden={!isActive}
          >
            {onZoom ? (
              <button
                type="button"
                className={styles.zoomTrigger}
                onClick={() => onZoom({ src: slide.img, title: slide.title })}
                aria-label={`View ${slide.title} full size`}
                tabIndex={isActive ? 0 : -1}
              >
                {image}
                <span className={styles.zoomHint}>
                  <Icon name="zoom" size={15} /> Click to zoom
                </span>
              </button>
            ) : (
              image
            )}
            <div className={styles.caption}>
              <b className={styles.captionTitle}>{slide.title}</b>
              {slide.sub && <span className={styles.captionSub}>{slide.sub}</span>}
            </div>
          </div>
        );
      })}

      {showControls && (
        <>
          <button
            type="button"
            className={clsx(styles.nav, styles.navPrev)}
            onClick={() => goTo(current - 1)}
            aria-label="Previous slide"
          >
            <Icon name="chevronLeft" size={16} />
          </button>
          <button
            type="button"
            className={clsx(styles.nav, styles.navNext)}
            onClick={() => goTo(current + 1)}
            aria-label="Next slide"
          >
            <Icon name="chevronRight" size={16} />
          </button>
          <div className={styles.dots}>
            {slides.map((slide, index) => (
              <button
                key={slide.id ?? index}
                type="button"
                className={clsx(styles.dot, index === current && styles.dotActive)}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === current ? 'true' : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const Slider = forwardRef(SliderBase);
Slider.displayName = 'Slider';

export const slideShape = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sub: PropTypes.string,
});

Slider.propTypes = {
  slides: PropTypes.arrayOf(slideShape).isRequired,
  /** `default` = rounded with shadow; `card` / `compact` = flush inside a card. */
  variant: PropTypes.oneOf(['default', 'card', 'compact']),
  autoPlay: PropTypes.bool,
  /** Autoplay interval in ms. */
  interval: PropTypes.number,
  /** When provided, slides become clickable and call `onZoom({ src, title })`. */
  onZoom: PropTypes.func,
  className: PropTypes.string,
};

export default Slider;
