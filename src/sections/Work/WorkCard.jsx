import PropTypes from 'prop-types';
import { Slider, slideShape } from '@/components/common';
import styles from './WorkCard.module.css';

function WorkCard({ item, interval, onZoom }) {
  return (
    <article className={styles.card}>
      <Slider slides={item.slides} variant="compact" interval={interval} onZoom={onZoom} />
      <div className={styles.meta}>
        <b className={styles.title}>{item.title}</b>
        <span className={styles.sub}>{item.sub}</span>
      </div>
    </article>
  );
}

export const workItemShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sub: PropTypes.string,
  slides: PropTypes.arrayOf(slideShape).isRequired,
});

WorkCard.propTypes = {
  item: workItemShape.isRequired,
  interval: PropTypes.number,
  onZoom: PropTypes.func,
};

export default WorkCard;
