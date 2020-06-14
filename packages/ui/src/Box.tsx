import styled from '@emotion/styled';
import {
  compose,
  space,
  layout,
  typography,
  flexbox,
  border,
  background,
  position,
  boxShadow,
  color,
  grid
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { sx, __css, variant } from './utils';
import { BoxProps } from './types';

const Box = styled('div', {
  shouldForwardProp
})<BoxProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0
  },
  __css,
  variant,
  sx,
  ({ css }) => css,
  compose(space, layout, typography, color, flexbox, grid, border, background, position, boxShadow)
);

Box.displayName = 'Box';

export default Box;
