import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Copy', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <rect height="38" width="32" fill="none" stroke="currentColor" x="6" y="8" />
    <polyline fill="none" points=" 10,2 44,2 44,42 " />
    <line fill="none" x1="14" x2="30" y1="18" y2="18" />
    <line fill="none" x1="14" x2="30" y1="26" y2="26" />
    <line fill="none" x1="14" x2="22" y1="34" y2="34" />
  </g>
));
