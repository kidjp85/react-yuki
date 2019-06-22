import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('ArrowDownLong', ({ color }) => (
  <>
    <line fill="none" strokeLinecap="butt" x1="24" x2="24" y1="2" y2="45" />
    <polyline fill="none" points="10,31 24,45 38,31 " stroke={color} />
  </>
));
