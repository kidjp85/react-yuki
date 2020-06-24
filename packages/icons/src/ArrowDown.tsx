import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('ArrowDown', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <polyline fill="none" points="4,14 24,34 44,14 " stroke="currentColor" />
  </g>
));
