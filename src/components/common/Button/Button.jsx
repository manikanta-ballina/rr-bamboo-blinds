import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Button.module.css';

/**
 * Polymorphic button: renders an <a> when `href` is provided, otherwise a <button>.
 */
function Button({ variant = 'primary', href, className, children, type = 'button', ...rest }) {
  const classes = clsx(styles.button, styles[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'ghost']),
  href: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node.isRequired,
};

export default Button;
