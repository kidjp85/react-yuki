import styled from 'styled-components';
import Box from './Box';
import { ButtonProps } from './types';

const Button = styled(Box)<ButtonProps>({});

Button.defaultProps = {
  as: 'button',
  tx: 'buttons',
  variant: 'default',
  __css: {
    cursor: 'pointer',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    verticalAlign: 'top',
    userSelect: 'none'
  }
};

Button.displayName = 'Button';

export default Button;
