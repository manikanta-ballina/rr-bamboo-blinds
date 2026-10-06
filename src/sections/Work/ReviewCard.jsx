import PropTypes from 'prop-types';
import clsx from 'clsx';
import { StarRating } from '@/components/common';
import styles from './ReviewCard.module.css';

function ReviewCard({ review, className }) {
  return (
    <blockquote className={clsx(styles.card, className)}>
      <StarRating value={review.stars} />
      <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
      <footer className={styles.author}>{review.name}</footer>
    </blockquote>
  );
}

export const reviewShape = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
});

ReviewCard.propTypes = {
  review: reviewShape.isRequired,
  className: PropTypes.string,
};

export default ReviewCard;
