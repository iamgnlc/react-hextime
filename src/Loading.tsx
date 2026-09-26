import { memo } from 'react';

import './Loading.scss';

const BUBBLE_COUNT = 7;

const Loading = () => (
  <div className="loading" role="status" aria-label="Loading">
    {Array.from({ length: BUBBLE_COUNT }, (_, index) => (
      <span
        key={index}
        className="loading-bubble"
        style={{ animationDelay: `${index * 0.15}s` }}
      />
    ))}
  </div>
);

Loading.displayName = 'Loading';

export default memo(Loading);
