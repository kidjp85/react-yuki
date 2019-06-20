import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Cart', ({ color }) => (
  <>
    <polyline
      fill="none"
      points="10 10 45 10 41 31 13 31 9 3 2 3"
      stroke={color}
      strokeLinecap="butt"
    />
    <circle cx="15" cy="41" fill="none" r="4" />
    <circle cx="40" cy="41" fill="none" r="4" />
  </>
));
