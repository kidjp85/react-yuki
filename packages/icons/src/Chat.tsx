import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Chart', ({ color, strokeWidth }) => (
  <g fill={color} stroke={color} strokeLinecap="square" strokeWidth={strokeWidth}>
    <path d="M38,11h4a4,4,0,0,1,4,4V32a4,4,0,0,1-4,4H38v8L26,36H22" fill="none" />
    <path
      d="M34,3H6A4,4,0,0,0,2,7V24a4,4,0,0,0,4,4h4V38L24,28H34a4,4,0,0,0,4-4V7A4,4,0,0,0,34,3Z"
      fill="none"
      stroke={color}
    />
  </g>
));
