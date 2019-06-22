import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Question', ({ color, strokeWidth }) => (
  <g fill={color} stroke={color} strokeLinecap="square" strokeWidth={strokeWidth}>
    <circle cx="24" cy="24" fill="none" r="22" stroke={color} />
    <circle cx="24" cy="36" r="1" stroke="none" />
    <circle cx="24" cy="36" fill="none" r="1" />
    <path
      d="M19,12.176c4.158-1.839,9.54-1.62,11.379,1.356s.568,6.435-2.582,9.1S24,26.9,24,29"
      fill="none"
    />
  </g>
));
