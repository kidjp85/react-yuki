import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Heart', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <path
      d="M33.545,4A11.235,11.235,0,0,0,24,9.143,11.235,11.235,0,0,0,14.455,4,11.476,11.476,0,0,0,3,15.429C3,26.857,24,44,24,44S45,26.857,45,15.429A11.476,11.476,0,0,0,33.545,4Z"
      fill="none"
      stroke="currentColor"
    />
  </g>
));
