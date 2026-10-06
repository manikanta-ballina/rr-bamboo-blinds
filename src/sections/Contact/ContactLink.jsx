import PropTypes from 'prop-types';
import clsx from 'clsx';
import Icon, { ICON_NAMES } from '@/components/common/Icon';
import styles from './ContactLink.module.css';

function ContactLink({ icon, variant, label, value, href, external = false }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a className={styles.link} href={href} {...externalProps}>
      <span className={clsx(styles.circle, styles[variant])}>
        <Icon name={icon} />
      </span>
      <span className={styles.text}>
        <b className={styles.label}>{label}</b>
        <span className={styles.value}>{value}</span>
      </span>
    </a>
  );
}

ContactLink.propTypes = {
  icon: PropTypes.oneOf(ICON_NAMES).isRequired,
  variant: PropTypes.oneOf(['phone', 'whatsapp', 'mail', 'instagram', 'location']).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
};

export default ContactLink;
