import React, { forwardRef } from 'react';
import Box from './Box';
import { ButtonProps } from './types';

const Button = forwardRef<HTMLDivElement, ButtonProps>((props, ref) => (
  <Box
    ref={ref}
    {...props}
    as="button"
    variant="buttons"
    __css={{
      cursor: 'pointer',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      verticalAlign: 'top',
      userSelect: 'none'
    }}
  />
));

Button.displayName = 'Button';

export default Button;
