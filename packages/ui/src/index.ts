import { FC } from 'react';
import styled from 'styled-components';
import {
  // space
  space,
  // color
  color,
  // typography
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  textStyle,
  letterSpacing,
  // layout
  display,
  width,
  height,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth,
  // borders
  borders,
  // flexbox
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf,
  order,
  // grid
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  // position
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  // backgrounds
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  // others
  opacity,
  overflow,
  boxShadow,
  verticalAlign,
  buttonStyle,
  variant
} from 'styled-system';
import {
  BoxProps,
  ButtonProps,
  FlexBoxProps,
  TextProps,
  HeadingProps,
  ImageProps,
  LinkProps,
  SvgProps,
  ThemeProps,
  GridProps
} from './types';

export { theme, normalize } from './styles';

export {
  BoxProps,
  ButtonProps,
  FlexBoxProps,
  TextProps,
  HeadingProps,
  ImageProps,
  LinkProps,
  SvgProps,
  ThemeProps,
  GridProps,
  VariantProps
} from './types';

export const themed = <P>(key: string) => (props: ThemeProps & P) => props.theme[key];

// Box
export const Box: FC<BoxProps> = styled('div')(
  {
    boxSizing: 'border-box'
  },
  space,
  color,
  display,
  width,
  height,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth,
  borders,
  flex,
  order,
  alignSelf,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  overflow,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  fontSize,
  fontStyle,
  textStyle,
  opacity,
  boxShadow,
  lineHeight,
  verticalAlign,
  themed('Box')
);

// Flexbox
export const Flex: FC<FlexBoxProps> = styled(Box)(
  {
    display: 'flex'
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  themed('Flex')
);

// Grid
export const Grid: FC<GridProps> = styled(Box)(
  {
    display: 'grid'
  },
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  themed('Grid')
);

// Button
const buttons = variant({ key: 'buttons' });

export const Button: FC<ButtonProps> = styled(Flex)(
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none'
  },
  fontWeight,
  buttonStyle,
  buttons,
  themed('Button')
);

Button.defaultProps = {
  as: 'button',
  fontSize: 'inherit',
  fontWeight: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  m: 0,
  px: 3,
  py: 3,
  color: 'white',
  bg: 'orange.3',
  border: 0
};

// Text
export const Text: FC<TextProps> = styled(Box)(
  fontStyle,
  fontFamily,
  fontWeight,
  textAlign,
  letterSpacing,
  themed('Text')
);

Text.defaultProps = {
  as: 'span',
  fontSize: '14px',
  fontWeight: 'normal'
};

const headings = variant({ key: 'headings' });

// Heading
export const Heading: FC<HeadingProps> = styled(Text)(headings, themed('Heading'));

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: '24px',
  fontWeight: 'bold'
};

// Image
export const Image: FC<ImageProps> = styled(Box)(
  {
    maxWidth: '100%',
    height: 'auto'
  },
  themed('Image')
);

Image.defaultProps = {
  as: 'img'
};

// Link
export const Link: FC<LinkProps> = styled(Box)(themed('Link'));

Link.defaultProps = {
  as: 'a',
  color: 'dark'
};

// Svg
export const Svg: FC<SvgProps> = styled(Box)(themed('Svg'));

Svg.defaultProps = {
  as: 'svg',
  width: 16,
  height: 16,
  viewBox: '0 0 48 48',
  display: 'inline-block'
};
