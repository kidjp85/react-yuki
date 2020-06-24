import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('ArrowUp', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <polyline fill="none" points="44,34 24,14 4,34 " stroke="currentColor" />
  </g>
));
