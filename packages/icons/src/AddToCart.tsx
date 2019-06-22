import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('AddToCart', ({ color }) => (
  <>
    <polyline
      fill="none"
      points="43.322,18.811 41,31 13,31 8,3 2,3 "
      stroke={color}
      strokeLinecap="butt"
    />
    <circle cx="15" cy="41" fill="none" r="4" />
    <circle cx="39" cy="41" fill="none" r="4" />
    <line fill="none" stroke={color} strokeLinecap="butt" x1="26.202" x2="9.25" y1="10" y2="10" />
    <circle cx="36" cy="12" fill="none" r="10" />
    <line fill="none" x1="36" x2="36" y1="8" y2="16" />
    <line fill="none" x1="32" x2="40" y1="12" y2="12" />
  </>
));
