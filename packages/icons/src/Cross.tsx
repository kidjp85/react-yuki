import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Cross', ({ color }) => (
  <>
    <line fill="none" stroke={color} x1="38" x2="10" y1="10" y2="38" />
    <line fill="none" stroke={color} x1="38" x2="10" y1="38" y2="10" />
  </>
));
