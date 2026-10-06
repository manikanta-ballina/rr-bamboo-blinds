import PropTypes from 'prop-types';
import { Container, SectionHeader } from '@/components/common';
import { PRODUCTS } from '@/data';
import { SECTION_IDS } from '@/constants/site';
import ProductCard from './ProductCard';
import styles from './Products.module.css';

function Products({ onZoom }) {
  return (
    <section id={SECTION_IDS.products} className={styles.section}>
      <Container>
        <SectionHeader
          tag="Our range"
          title="Three ways to bring bamboo home"
          description="Every blind is made to order. Browse the range below — our No Sheet blind is the current featured favourite."
        />
        <div className={styles.grid}>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onZoom={onZoom} />
          ))}
        </div>
      </Container>
    </section>
  );
}

Products.propTypes = {
  onZoom: PropTypes.func,
};

export default Products;
