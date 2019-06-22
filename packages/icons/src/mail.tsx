import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Mail', ({ color, strokeWidth }) => (
  <g fill={color} stroke={color} strokeLinecap="square" strokeWidth={strokeWidth}>
    <polyline fill="none" points="3.23 7.118 24 26 44.77 7.118" strokeLinecap="butt" />
    <rect height="36" width="44" fill="none" rx="4" stroke={color} x="2" y="6" />
  </g>
));
