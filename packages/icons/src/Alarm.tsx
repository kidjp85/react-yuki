import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Alarm', ({ color, strokeWidth }) => (
  <g fill={color} stroke={color} strokeLinecap="square" strokeWidth={strokeWidth}>
    <path
      d="M43,37s-5-7-5-13V16A14,14,0,0,0,24,2h0A14,14,0,0,0,10,16v8c0,6-5,13-5,13Z"
      fill="none"
      stroke={color}
    />
    <path d="M29,41a5,5,0,0,1-10,0" fill="none" strokeLinecap="butt" />
  </g>
));
