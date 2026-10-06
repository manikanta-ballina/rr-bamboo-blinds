import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '@/components/common/Icon';
import { useKeyDown, useLockBodyScroll } from '@/hooks';
import styles from './Lightbox.module.css';

/**
 * Full-screen image viewer. Closes on overlay click, close button or Escape.
 */
function Lightbox({ image, onClose }) {
  const isOpen = Boolean(image);
  const closeButtonRef = useRef(null);

  useKeyDown('Escape', onClose, isOpen);
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  /** Close only when the backdrop itself (not the image/dialog) is clicked. */
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    // Keyboard dismissal is handled by useKeyDown('Escape') above.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={styles.inner}
        role="dialog"
        aria-modal="true"
        aria-label={image.title || 'Image preview'}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close preview"
        >
          <Icon name="close" size={18} />
        </button>
        <img className={styles.image} src={image.src} alt={image.title || ''} />
        {image.title && <div className={styles.caption}>{image.title}</div>}
      </div>
    </div>
  );
}

Lightbox.propTypes = {
  /** `null` when closed. */
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Lightbox;
