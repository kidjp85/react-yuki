import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('ArrowRightLong', ({ color }) => (
  <>
    <line fill="none" strokeLinecap="butt" x1="2" x2="45" y1="24" y2="24" />
    <polyline fill="none" points="31,10 45,24 31,38 " stroke={color} />
  </>
));
