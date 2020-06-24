import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Check', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <polyline fill="none" points="4 28 16 40 44 4" stroke="currentColor" />
  </g>
));
