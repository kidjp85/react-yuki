import css, { get } from '@styled-system/css';
import { StyledFunction, Variant } from './types';

export const sx: StyledFunction = props => css(props.sx)(props.theme);

export const __css: StyledFunction = props => css(props.__css)(props.theme);

export const variant: Variant = ({ theme = {}, variant: styledVariant = '', tx = 'variants' }) =>
  css(get(theme, `${tx}.${styledVariant}`, get(theme, styledVariant)))(theme);
