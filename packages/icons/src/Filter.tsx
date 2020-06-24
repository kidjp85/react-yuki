import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Filter', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <polygon fill="none" points="4 4 44 4 28 28 28 45 20 45 20 28 4 4" stroke="currentColor" />
  </g>
));
