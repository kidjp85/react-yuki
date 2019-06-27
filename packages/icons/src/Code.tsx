import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Code', ({ color, strokeWidth }) => (
  <g fill={color} stroke={color} strokeLinecap="square" strokeWidth={strokeWidth}>
    <polyline fill="none" points="12,16 4,24 12,32 " stroke={color} />
    <polyline fill="none" points="36,16 44,24 36,32 " stroke={color} />
    <line fill="none" x1="20" x2="28" y1="40" y2="8" />
  </g>
));
