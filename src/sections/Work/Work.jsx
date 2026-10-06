import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, SectionHeader } from '@/components/common';
import { REVIEWS, WORK_ITEMS } from '@/data';
import { REVIEW_PREVIEW_COUNT, SECTION_IDS, SITE, WORK_PREVIEW_COUNT } from '@/constants/site';
import WorkCard from './WorkCard';
import ReviewCard from './ReviewCard';
import styles from './Work.module.css';

const BASE_INTERVAL = 3400;
const INTERVAL_STEP = 300;

function Work({ onZoom }) {
  const [showAllWork, setShowAllWork] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const visibleWork = showAllWork ? WORK_ITEMS : WORK_ITEMS.slice(0, WORK_PREVIEW_COUNT);
  const hiddenWorkCount = WORK_ITEMS.length - WORK_PREVIEW_COUNT;
  const hasMoreWork = !showAllWork && hiddenWorkCount > 0;

  return (
    <section id={SECTION_IDS.work}>
      <Container>
        <SectionHeader
          tag="Our work"
          title="Recent installations"
          description={`A look at homes and offices we've fitted across ${SITE.serviceArea}.`}
        />

        <div className={styles.grid}>
          {visibleWork.map((item, index) => (
            <WorkCard
              key={item.id}
              item={item}
              interval={BASE_INTERVAL + index * INTERVAL_STEP}
              onZoom={onZoom}
            />
          ))}

          {hasMoreWork && (
            <button type="button" className={styles.moreCard} onClick={() => setShowAllWork(true)}>
              <span className={styles.moreCardInner}>
                <span className={styles.moreCount}>+{hiddenWorkCount}</span>
                <span>Show more installations</span>
              </span>
            </button>
          )}
        </div>

        {showAllReviews ? (
          <div className={styles.reviewScroll}>
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} className={styles.reviewCard} />
            ))}
          </div>
        ) : (
          <div className={styles.reviewRow}>
            {REVIEWS.slice(0, REVIEW_PREVIEW_COUNT).map((review) => (
              <ReviewCard key={review.id} review={review} className={styles.reviewCard} />
            ))}
            <button type="button" className={styles.seeAll} onClick={() => setShowAllReviews(true)}>
              See all reviews
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

Work.propTypes = {
  onZoom: PropTypes.func,
};

export default Work;
