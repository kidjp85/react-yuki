import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('File', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <polyline fill="none" points="30,2 30,14 42,14 " stroke="currentColor" strokeLinecap="butt" />
    <polygon fill="none" points="30,2 6,2 6,46 42,46 42,14 " stroke="currentColor" />
    <line fill="none" x1="14" x2="34" y1="36" y2="36" />
    <line fill="none" x1="14" x2="34" y1="26" y2="26" />
    <line fill="none" x1="14" x2="22" y1="16" y2="16" />
  </g>
));
