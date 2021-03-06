import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('ArrowUpLong', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <line fill="none" strokeLinecap="butt" x1="24" x2="24" y1="46" y2="3" />
    <polyline fill="none" points="38,17 24,3 10,17 " stroke="currentColor" />
  </g>
));
