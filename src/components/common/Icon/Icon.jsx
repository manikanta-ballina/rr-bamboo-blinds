import PropTypes from 'prop-types';
import { ICON_PATHS, ICON_NAMES } from './iconPaths';

/**
 * Inline SVG icon. Inherits colour from `currentColor`.
 */
function Icon({ name, size = 18, className, title }) {
  const paths = ICON_PATHS[name];
  if (!paths) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
    >
      {title && <title>{title}</title>}
      {paths}
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.oneOf(ICON_NAMES).isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  /** Accessible label; omit for purely decorative icons. */
  title: PropTypes.string,
};

export default Icon;
