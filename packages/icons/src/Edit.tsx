import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Edit', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <line fill="none" strokeLinecap="butt" x1="7" x2="17" y1="31" y2="41" />
    <line fill="none" strokeLinecap="butt" x1="12" x2="34" y1="36" y2="14" />
    <line fill="none" x1="29" x2="39" y1="9" y2="19" />
    <path
      d="M17,41,3,45,7,31,34.121,3.879a3,3,0,0,1,4.243,0l5.757,5.757a3,3,0,0,1,0,4.243Z"
      fill="none"
      stroke="currentColor"
    />
  </g>
));
