import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('User', ({ color, strokeWidth }) => (
  <g fill={color} stroke={color} strokeLinecap="square" strokeWidth={strokeWidth}>
    <path
      d="M24,24L24,24 c-5.523,0-10-4.477-10-10v-2c0-5.523,4.477-10,10-10h0c5.523,0,10,4.477,10,10v2C34,19.523,29.523,24,24,24z"
      fill="none"
      stroke={color}
    />
    <path
      d="M44,38.856 c0-3.101-2.034-5.828-5.007-6.712C35.477,31.098,30.288,30,24,30s-11.477,1.098-14.993,2.144C6.034,33.028,4,35.755,4,38.856V46h40 V38.856z"
      fill="none"
    />
  </g>
));
