import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Search', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <line fill="none" x1="44" x2="31.314" y1="44" y2="31.314" />
    <circle cx="20" cy="20" fill="none" r="16" stroke="currentColor" />
  </g>
));
