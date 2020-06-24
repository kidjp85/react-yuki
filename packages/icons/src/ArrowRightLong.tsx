import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('ArrowRightLong', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <line fill="none" strokeLinecap="butt" x1="2" x2="45" y1="24" y2="24" />
    <polyline fill="none" points="31,10 45,24 31,38 " stroke="currentColor" />
  </g>
));
