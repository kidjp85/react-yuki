import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('CloudUpload', ({ strokeWidth }) => (
  <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={strokeWidth}>
    <line fill="none" stroke="currentColor" strokeLinecap="butt" x1="24" x2="24" y1="36" y2="20" />
    <polyline fill="none" points="18,26 24,20 30,26 " stroke="currentColor" />
    <path
      d="M32,38h6 c4.4,0,8-3.6,8-8c0-4.4-3.6-8-8-8c0,0,0,0-0.1,0c-0.5-7.8-7-14-14.9-14C15,8,8.4,14.3,8,22.3c-3.5,0.9-6,4-6,7.7c0,4.4,3.6,8,8,8h6"
      fill="none"
    />
  </g>
));
