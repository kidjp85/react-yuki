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
      appearance: 'none',
      alignItems: 'center',
      border: 1,
      borderRadius: 2,
      boxShadow: 'none',
      display: 'inline-flex',
      fontSize: 'm',
      fontWeight: 5,
      height: '2.5em',
      justifyContent: 'center',
      lineHeight: 'large',
      outline: 'none',
      position: 'relative',
      px: '2.5em',
      py: 'calc(.5em - 1px)',
      transition: 'all 0.2s ease-in-out',
      cursor: 'pointer',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      verticalAlign: 'top',
      userSelect: 'none',
      '&[disabled]': {
        opacity: 0.5,
        cursor: 'not-allowed'
      }
    }}
  />
));

Button.displayName = 'Button';

export default Button;
