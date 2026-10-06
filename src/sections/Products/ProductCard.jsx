import PropTypes from 'prop-types';
import { Slider, slideShape } from '@/components/common';
import styles from './ProductCard.module.css';

function ProductCard({ product, onZoom }) {
  return (
    <article className={styles.card}>
      <Slider slides={product.slides} variant="card" onZoom={onZoom} />
      <div className={styles.body}>
        {product.badge && <span className={styles.badge}>{product.badge}</span>}
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
      </div>
    </article>
  );
}

export const productShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  badge: PropTypes.string,
  description: PropTypes.string.isRequired,
  slides: PropTypes.arrayOf(slideShape).isRequired,
});

ProductCard.propTypes = {
  product: productShape.isRequired,
  onZoom: PropTypes.func,
};

export default ProductCard;
