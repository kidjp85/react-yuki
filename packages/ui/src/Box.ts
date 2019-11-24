import styled from 'styled-components';
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
  color
} from 'styled-system';
import { sx, base, variant } from './utils';
import { BoxProps } from './types';

const Box = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0
  },
  base,
  variant,
  sx,
  compose(space, layout, typography, color, flexbox, border, background, position, boxShadow)
);

export default Box;
