import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('CloudDownload', ({ color }) => (
  <>
    <line fill="none" stroke={color} strokeLinecap="butt" x1="24" x2="24" y1="20" y2="36" />
    <polyline fill="none" points="30,30 24,36 18,30 " stroke={color} />
    <path
      d="M32,38h6 c4.4,0,8-3.6,8-8c0-4.4-3.6-8-8-8c0,0,0,0-0.1,0c-0.5-7.8-7-14-14.9-14C15,8,8.4,14.3,8,22.3c-3.5,0.9-6,4-6,7.7c0,4.4,3.6,8,8,8h6"
      fill="none"
    />
  </>
));
