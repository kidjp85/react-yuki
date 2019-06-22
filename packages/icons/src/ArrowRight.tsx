import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('ArrowRight', ({ color, strokeWidth }) => (
  <g fill={color} stroke={color} strokeLinecap="square" strokeWidth={strokeWidth}>
    <polyline fill="none" points="14,4 34,24 14,44 " stroke={color} />
  </g>
));
