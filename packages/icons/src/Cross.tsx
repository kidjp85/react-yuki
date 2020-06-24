import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Cross', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <line fill="none" stroke="currentColor" x1="38" x2="10" y1="10" y2="38" />
    <line fill="none" stroke="currentColor" x1="38" x2="10" y1="38" y2="10" />
  </g>
));
