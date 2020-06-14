import React, { forwardRef } from 'react';
import Box from './Box';
import { ImageProps } from './types';

const Image = forwardRef<HTMLDivElement, ImageProps>((props, ref) => (
  <Box
    ref={ref}
    as="img"
    tx="images"
    variant="default"
    {...props}
    __css={{ maxWidth: '100%', height: 'auto' }}
  />
));

Image.displayName = 'Image';

export default Image;
