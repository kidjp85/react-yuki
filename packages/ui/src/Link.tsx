import React, { forwardRef } from 'react';
import Box from './Box';
import { LinkProps } from './types';

const Link = forwardRef<HTMLDivElement, LinkProps>((props, ref) => (
  <Box
    ref={ref}
    as="a"
    tx="links"
    variant="default"
    {...props}
    __css={{
      cursor: 'pointer',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      verticalAlign: 'top'
    }}
  />
));

Link.displayName = 'Link';

export default Link;
