import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Key', ({ color }) => (
  <>
    <ellipse
      cx="12"
      cy="34"
      fill="none"
      rx="10"
      ry="10"
      stroke={color}
      transform="matrix(0.7071 -0.7071 0.7071 0.7071 -20.5269 18.4437)"
    />
    <line fill="none" x1="23" x2="42" y1="23" y2="4" />
    <polyline fill="none" points="38,8 45,15 38,22 31,15 " strokeLinecap="butt" />
  </>
));
