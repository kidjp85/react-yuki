import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('ArrowLeftLong', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <line fill="none" strokeLinecap="butt" x1="46" x2="3" y1="24" y2="24" />
    <polyline fill="none" points="17,10 3,24 17,38 " stroke="currentColor" />
  </g>
));
