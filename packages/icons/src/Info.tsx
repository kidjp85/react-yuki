import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Info', ({ color }) => (
  <>
    <circle cx="24" cy="12" r="1" stroke="none" />
    <circle cx="24" cy="24" fill="none" r="22" stroke={color} />
    <circle cx="24" cy="12" fill="none" r="1" />
    <line fill="none" x1="24" x2="24" y1="19" y2="36" />
  </>
));
