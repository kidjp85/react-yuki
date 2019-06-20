import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('ArrowRight', ({ color }) => (
  <polyline fill="none" points="14,4 34,24 14,44 " stroke={color} />
));
