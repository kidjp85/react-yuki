import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Warning', ({ color }) => (
  <>
    <circle cx="24" cy="36" r="1" stroke="none" />
    <polygon fill="none" points="3 43 24 4 45 43 3 43" stroke={color} />
    <line fill="none" x1="24" x2="24" y1="18" y2="29" />
    <circle cx="24" cy="36" fill="none" r="1" />
  </>
));
