import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Upload', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <line fill="none" strokeLinecap="butt" x1="24" x2="24" y1="35" y2="4" />
    <polyline fill="none" points="35 15 24 4 13 15" />
    <path d="M3,33v8a4,4,0,0,0,4,4H41a4,4,0,0,0,4-4V33" fill="none" stroke="currentColor" />
  </g>
));
