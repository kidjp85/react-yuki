import React, { forwardRef } from 'react';
import Box from './Box';
import { SvgProps } from './types';

const Svg = forwardRef<HTMLDivElement, SvgProps>((props, ref) => (
  <Box
    ref={ref}
    as="svg"
    tx="svgs"
    variant="default"
    {...props}
    __css={{
      width: 16,
      height: 16
    }}
  />
));

Svg.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 48 48',
  fill: 'currentColor'
};

Svg.displayName = 'Svg';

export default Svg;
