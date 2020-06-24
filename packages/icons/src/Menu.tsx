import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Menu', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <line fill="none" x1="2" x2="46" y1="24" y2="24" />
    <line fill="none" stroke="currentColor" x1="2" x2="46" y1="10" y2="10" />
    <line fill="none" stroke="currentColor" x1="2" x2="46" y1="38" y2="38" />
  </g>
));
