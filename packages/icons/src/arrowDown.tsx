import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('ArrowDown', ({ color, strokeWidth }) => (
  <g fill={color} stroke={color} strokeLinecap="square" strokeWidth={strokeWidth}>
    <polyline fill="none" points="4,14 24,34 44,14 " stroke={color} />
  </g>
));
