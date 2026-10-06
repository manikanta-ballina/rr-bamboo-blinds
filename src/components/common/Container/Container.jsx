import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Container.module.css';

/** Centred, max-width content wrapper. */
function Container({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag className={clsx(styles.container, className)} {...rest}>
      {children}
    </Tag>
  );
}

Container.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
