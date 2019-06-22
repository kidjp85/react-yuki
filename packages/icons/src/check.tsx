import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Check', ({ color, strokeWidth }) => (
  <g fill={color} stroke={color} strokeLinecap="square" strokeWidth={strokeWidth}>
    <polyline fill="none" points="4 28 16 40 44 4" stroke={color} />
  </g>
));
