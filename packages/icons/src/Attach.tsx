import React from 'react';
import withIcon from './utils/withIcons';

export default withIcon('Attach', ({ color }) => (
  <path
    d="M43.9,22.7L26.3,40.4 c-5.1,5.1-13.3,5.1-18.4,0l0,0c-5.1-5.1-5.1-13.3,0-18.4L23.4,6.4c3.5-3.5,9.2-3.5,12.7,0l0,0c3.5,3.5,3.5,9.2,0,12.7L22,33.3 c-2,2-5.1,2-7.1,0l0,0c-2-2-2-5.1,0-7.1l12-12"
    fill="none"
    stroke={color}
  />
));
