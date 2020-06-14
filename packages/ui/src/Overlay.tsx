import React, { forwardRef } from 'react';
import { OverlayProps } from './types';
import Box from './Box';

const Overlay = forwardRef<HTMLDivElement, OverlayProps>((props, ref) => (
  <Box
    ref={ref}
    {...props}
    top={0}
    left={0}
    right={0}
    bottom={0}
    __css={{
      position: 'absolute'
    }}
  />
));

Overlay.displayName = 'Overlay';

export default Overlay;
