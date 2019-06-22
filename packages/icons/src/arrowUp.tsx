import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('ArrowUp', ({ color, strokeWidth }) => (
  <g fill={color} stroke={color} strokeLinecap="square" strokeWidth={strokeWidth}>
    <polyline fill="none" points="44,34 24,14 4,34 " stroke={color} />
  </g>
));
