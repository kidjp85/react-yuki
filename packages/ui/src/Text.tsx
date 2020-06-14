import React, { forwardRef } from 'react';
import Box from './Box';
import { TextProps } from './types';

const Text = forwardRef<HTMLDivElement, TextProps>((props, ref) => (
  <Box
    ref={ref}
    as="span"
    tx="texts"
    variant="default"
    {...props}
    __css={{
      fontSize: '3',
      lineHeight: 'normal'
    }}
  />
));

Text.displayName = 'Text';

export default Text;
