import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('File', ({ color }) => (
  <>
    <polyline fill="none" points="30,2 30,14 42,14 " stroke={color} strokeLinecap="butt" />
    <polygon fill="none" points="30,2 6,2 6,46 42,46 42,14 " stroke={color} />
    <line fill="none" x1="14" x2="34" y1="36" y2="36" />
    <line fill="none" x1="14" x2="34" y1="26" y2="26" />
    <line fill="none" x1="14" x2="22" y1="16" y2="16" />
  </>
));
