import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Trash', ({ color }) => (
  <>
    <line fill="none" x1="24" x2="24" y1="25" y2="38" />
    <line fill="none" x1="17" x2="17" y1="25" y2="38" />
    <line fill="none" x1="31" x2="31" y1="25" y2="38" />
    <polyline fill="none" points="17 9 17 2 31 2 31 9" stroke={color} strokeLinecap="butt" />
    <path d="M39,21V42a4,4,0,0,1-4,4H13a4,4,0,0,1-4-4V21" fill="none" stroke={color} />
    <rect height="6" width="42" fill="none" stroke={color} x="3" y="9" />
  </>
));
