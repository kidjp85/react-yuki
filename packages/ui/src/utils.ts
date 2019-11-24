import css, { get } from '@styled-system/css';
import { Sx, Variant } from './types';

export const sx: Sx = props => css(props.sx)(props.theme);

export const base: Sx = props => css(props.__css)(props.theme);

export const variant: Variant = ({ theme = {}, variant = '', tx = 'variants' }) =>
  css(get(theme, tx + '.' + variant, get(theme, variant)))(theme);
