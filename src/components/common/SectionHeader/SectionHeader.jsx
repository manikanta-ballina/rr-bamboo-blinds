import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './SectionHeader.module.css';

/** Eyebrow tag + heading + description used at the top of every section. */
function SectionHeader({ tag, title, description, onDark = false, className }) {
  return (
    <div className={clsx(styles.header, onDark && styles.onDark, className)}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

SectionHeader.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  onDark: PropTypes.bool,
  className: PropTypes.string,
};

export default SectionHeader;
