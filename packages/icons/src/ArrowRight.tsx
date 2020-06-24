import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('ArrowRight', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <polyline fill="none" points="14,4 34,24 14,44 " stroke="currentColor" />
  </g>
));
