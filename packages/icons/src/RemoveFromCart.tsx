import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('RemoveFromCart', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <polyline
      fill="none"
      points="43.322,18.811 41,31 13,31 8,3 2,3 "
      stroke="currentColor"
      strokeLinecap="butt"
    />
    <circle cx="15" cy="41" fill="none" r="4" />
    <circle cx="39" cy="41" fill="none" r="4" />
    <line
      fill="none"
      stroke="currentColor"
      strokeLinecap="butt"
      x1="26.202"
      x2="9.25"
      y1="10"
      y2="10"
    />
    <circle cx="36" cy="12" fill="none" r="10" />
    <line fill="none" x1="32" x2="40" y1="12" y2="12" />
  </g>
));
