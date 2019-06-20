import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('ArrowLeft', ({ color }) => (
  <polyline fill="none" points="34,4 14,24 34,44 " stroke={color} />
));
