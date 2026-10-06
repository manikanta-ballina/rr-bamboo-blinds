import styles from './BambooGrove.module.css';

const VIEWBOX_HEIGHT = 210;
const NODE_SPACING = 38;

/** Stalk positions (x) and heights across a 1600-wide viewBox. */
const STALKS = [
  { x: 50, h: 130 },
  { x: 160, h: 180 },
  { x: 270, h: 110 },
  { x: 390, h: 170 },
  { x: 510, h: 200 },
  { x: 640, h: 125 },
  { x: 770, h: 175 },
  { x: 900, h: 150 },
  { x: 1030, h: 195 },
  { x: 1160, h: 120 },
  { x: 1290, h: 170 },
  { x: 1420, h: 140 },
  { x: 1540, h: 185 },
];

/** Decorative bamboo silhouette along the bottom of the contact section. */
function BambooGrove() {
  return (
    <svg
      className={styles.grove}
      viewBox={`0 0 1600 ${VIEWBOX_HEIGHT}`}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      {STALKS.map(({ x, h }) => {
        const nodeCount = Math.floor(h / NODE_SPACING);
        return (
          <g key={x} transform={`translate(${x},${VIEWBOX_HEIGHT - h})`}>
            <path
              d="M0,0 Q-34,-13 -47,-38 Q-23,-27 -5,-9 Q5,-31 31,-42 Q24,-14 0,0Z"
              fill="var(--color-gold)"
              opacity="0.28"
            />
            <path
              d="M0,0 Q28,-10 44,-32 Q22,-23 6,-6 Q-3,-27 -25,-40 Q-16,-13 0,0Z"
              fill="var(--color-gold)"
              opacity="0.22"
            />
            <rect x="-5" y="0" width="10" height={h} rx="5" fill="#fff" opacity="0.16" />
            {Array.from({ length: nodeCount }, (_, n) => {
              const y = n * NODE_SPACING + 16;
              return (
                <line
                  key={n}
                  x1="-6"
                  x2="6"
                  y1={y}
                  y2={y}
                  stroke="#fff"
                  strokeOpacity="0.24"
                  strokeWidth="2"
                />
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

export default BambooGrove;
