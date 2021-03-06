import {
  ElementType,
  RefAttributes,
  HTMLProps,
  PropsWithoutRef,
  ForwardRefExoticComponent
} from 'react';
import { MotionProps } from 'framer-motion';
import { ResponsiveStyleValue, SystemStyleObject, Theme, CSSObject } from '@styled-system/css';
import {
  SpaceProps,
  LayoutProps,
  PositionProps,
  FontSizeProps,
  FlexProps as FlexDefaultProps,
  FontStyleProps,
  ColorProps,
  OrderProps,
  BorderProps,
  BackgroundProps,
  AlignSelfProps,
  FlexboxProps,
  FontFamilyProps,
  TypographyProps,
  FontWeightProps,
  TextAlignProps,
  LetterSpacingProps,
  BoxShadowProps,
  GridProps as GridDefaultProps
} from 'styled-system';

export type StyledObject =
  | SystemStyleObject
  | Record<
      string,
      | SystemStyleObject
      | ResponsiveStyleValue<number | string>
      | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>
    >;

export interface StyledProps {
  sx?: StyledObject;
  theme?: Theme;
  tx?: string;
  variant?: string | string[];
  __css?: StyledObject;
}

export type StyledFunction = (props: StyledProps) => CSSObject;

export type Variant = (props: StyledProps) => CSSObject;

export interface BaseProps extends RefAttributes<any> { //eslint-disable-line
  as?: ElementType;
  css?: CSSObject;
}

export interface BaseStyleProps
  extends BaseProps,
    SpaceProps,
    LayoutProps,
    FontSizeProps,
    ColorProps,
    FlexDefaultProps,
    FlexboxProps,
    OrderProps,
    AlignSelfProps,
    BorderProps,
    BackgroundProps,
    PositionProps,
    BoxShadowProps,
    TypographyProps,
    FontFamilyProps,
    FontWeightProps,
    GridDefaultProps,
    StyledProps {
  color?: string;
}

export type StyledRefComponent<T, P = {}> = ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>;

interface TextBaseProps
  extends FontWeightProps,
    TextAlignProps,
    FontStyleProps,
    LetterSpacingProps {}

export interface StyledComponentProps<T = HTMLDivElement>
  extends BaseStyleProps,
    Omit<HTMLProps<T>, keyof BaseStyleProps> {}

export interface BoxProps extends StyledComponentProps {}

export interface FlexProps extends StyledComponentProps {}

export interface GridProps extends StyledComponentProps {}

export interface TextProps extends StyledComponentProps, TextBaseProps {}

export interface HeadingProps extends StyledComponentProps<HTMLHeadingElement>, TextBaseProps {}

export interface LinkProps extends StyledComponentProps {}

export interface ButtonProps extends StyledComponentProps {}

export interface ImageProps extends StyledComponentProps {}

export type AnimatedComponentProps<P> = PropsWithoutRef<Omit<P, keyof MotionProps> & MotionProps> &
  RefAttributes<Element>;

export type AnimatedProps = AnimatedComponentProps<BoxProps>;

export interface SvgProps extends StyledComponentProps {
  viewBox?: string;
  xmlns?: string;
  fill?: string;
}

export interface OverlayProps extends StyledComponentProps {}

export interface DividerProps extends StyledComponentProps {}

export type OmitMotionProps<P> = Omit<P, keyof MotionProps>;
