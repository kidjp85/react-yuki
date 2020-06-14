import React, { forwardRef } from 'react';
import Box from './Box';
import { HeadingProps } from './types';

const Heading = forwardRef<HTMLDivElement, HeadingProps>((props, ref) => (
  <Box
    ref={ref}
    as="h2"
    tx="headings"
    variant="title4"
    {...props}
    __css={{
      fontFamily: 'inherit',
      lineHeight: 'normal',
      wordBreak: 'break-word'
    }}
  />
));

Heading.displayName = 'Heading';

export default Heading;
