import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Download', ({ color }) => (
  <>
    <line fill="none" strokeLinecap="butt" x1="24" x2="24" y1="4" y2="35" />
    <polyline fill="none" points="35 24 24 35 13 24" />
    <path d="M3,33v8a4,4,0,0,0,4,4H41a4,4,0,0,0,4-4V33" fill="none" stroke={color} />
  </>
));
