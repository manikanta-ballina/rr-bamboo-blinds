import PropTypes from 'prop-types';
import styles from './StarRating.module.css';

const MAX_STARS = 5;

/** Displays a `value`-out-of-5 star rating. */
function StarRating({ value, max = MAX_STARS }) {
  const filled = Math.max(0, Math.min(value, max));

  return (
    <div className={styles.stars} role="img" aria-label={`${filled} out of ${max} stars`}>
      {'★'.repeat(filled)}
      {'☆'.repeat(max - filled)}
    </div>
  );
}

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
};

export default StarRating;
