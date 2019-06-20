import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Currency', ({ color }) => (
  <>
    <circle cx="24" cy="24" fill="none" r="22" stroke={color} />
    <line fill="none" x1="24" x2="24" y1="10" y2="38" />
    <path
      d=" M30.75,14.438c-3.242-1.783-13.453-3.112-13.453,3.026c0,7.348,12.967,4.755,12.967,11.238S21.835,34.699,16,32.591"
      fill="none"
    />
  </>
));
