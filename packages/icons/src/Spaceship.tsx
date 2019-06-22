import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Spaceship', ({ color }) => (
  <>
    <line
      fill="none"
      stroke={color}
      strokeLinecap="butt"
      x1="29.769"
      x2="41.866"
      y1="6.086"
      y2="18.182"
    />
    <path
      d="M24.831,8.965C18.989,6.449,11.5,8,6,15l6.734,6.736"
      fill="none"
      stroke={color}
      strokeLinecap="butt"
    />
    <path
      d="M39.035,23.169C41.551,29.011,40,36.5,33,42l-6.736-6.734"
      fill="none"
      stroke={color}
      strokeLinecap="butt"
    />
    <path
      d="M21,38,10,27S18.894,3.414,46,2C44.468,28.988,21,38,21,38Z"
      fill="none"
      stroke={color}
    />
    <circle cx="27" cy="21" fill="none" r="4" />
    <path
      d="M4.464,36.464a5,5,0,0,1,7.072,7.072C9.583,45.488,2,46,2,46S2.512,38.417,4.464,36.464Z"
      fill="none"
    />
  </>
));
