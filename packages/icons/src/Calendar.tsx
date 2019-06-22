import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Calendar', ({ color, strokeWidth }) => (
  <g fill={color} stroke={color} strokeLinecap="square" strokeWidth={strokeWidth}>
    <line fill="none" x1="9" x2="39" y1="31" y2="31" />
    <line fill="none" x1="18" x2="18" y1="23" y2="39" />
    <line fill="none" x1="30" x2="30" y1="23" y2="39" />
    <polyline fill="none" points="40 6 46 6 46 45 2 45 2 6 13 6" stroke={color} />
    <line fill="none" stroke={color} x1="13" x2="13" y1="11" y2="2" />
    <line fill="none" stroke={color} x1="35" x2="35" y1="11" y2="2" />
    <line fill="none" stroke={color} x1="2" x2="46" y1="17" y2="17" />
    <line fill="none" stroke={color} x1="18" x2="35" y1="6" y2="6" />
  </g>
));
