import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Tag', ({ color }) => (
  <>
    <path
      d="M30.485,43.828,43.828,30.485a4,4,0,0,0,0-5.657L22,3H3V22L24.828,43.828A4,4,0,0,0,30.485,43.828Z"
      fill="none"
      stroke={color}
    />
    <circle cx="14" cy="14" fill="none" r="4" />
    <line fill="none" x1="25" x2="33" y1="19" y2="27" />
    <line fill="none" x1="19" x2="27" y1="25" y2="33" />
  </>
));
