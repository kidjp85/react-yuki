import { ElementType, RefAttributes, HTMLProps } from 'react';
import { ResponsiveStyleValue, SystemStyleObject, Theme } from '@styled-system/css';
import { CSSObject } from 'styled-components';

import {
  SpaceProps,
  LayoutProps,
  PositionProps,
  FontSizeProps,
  FlexProps as FlexDefaultProps,
  ColorProps,
  OrderProps,
  BorderProps,
  BackgroundProps,
  AlignSelfProps,
  ResponsiveValue,
  FlexboxProps,
  FontFamilyProps,
  FontWeightProps,
  TextAlignProps,
  LetterSpacingProps,
  ButtonStyleProps,
  BoxShadowProps,
  GridGapProps,
  GridColumnGapProps,
  GridRowGapProps,
  GridColumnProps,
  GridRowProps,
  GridAutoFlowProps,
  GridAutoColumnsProps,
  GridAutoRowsProps,
  GridTemplateColumnsProps,
  GridTemplateRowsProps,
  GridTemplateAreasProps,
  GridAreaProps
} from 'styled-system';

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type SxStyleProp =
  | SystemStyleObject
  | Record<
      string,
      | SystemStyleObject
      | ResponsiveStyleValue<number | string>
      | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>
    >;

export interface SxProps {
  sx?: SxStyleProp;
  theme?: Theme;
  __css?: SxStyleProp;
}

export type Sx = (props: SxProps) => CSSObject;

export interface VariantProps {
  variant?: string | string[];
  theme?: Theme;
  tx?: string;
}

export type Variant = (props: VariantProps) => CSSObject;

export interface BaseProps extends RefAttributes<{}> {
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
    SxProps {
  variant?: ResponsiveValue<string>;
  tx?: string;
  color?: string;
}

export interface BoxProps
  extends BaseStyleProps,
    Omit<HTMLProps<HTMLDivElement>, keyof BaseStyleProps> {}

export interface FlexProps extends BoxProps {}

export interface GridProps
  extends BoxProps,
    GridGapProps,
    GridColumnGapProps,
    GridRowGapProps,
    GridColumnProps,
    GridRowProps,
    GridAutoFlowProps,
    GridAutoColumnsProps,
    GridAutoRowsProps,
    GridTemplateColumnsProps,
    GridTemplateRowsProps,
    GridTemplateAreasProps,
    GridAreaProps {}

interface TextBaseProps
  extends BaseStyleProps,
    FontFamilyProps,
    FontWeightProps,
    TextAlignProps,
    LetterSpacingProps {}

export interface TextProps
  extends TextBaseProps,
    Omit<HTMLProps<HTMLDivElement>, keyof TextBaseProps> {}

export interface HeadingProps
  extends TextBaseProps,
    Omit<HTMLProps<HTMLHeadingElement>, keyof TextBaseProps> {}

export interface LinkProps extends BoxProps {}

interface ButtonBaseProps extends FlexProps, FontWeightProps, ButtonStyleProps {}

export interface ButtonProps
  extends ButtonBaseProps,
    Omit<HTMLProps<HTMLDivElement>, keyof ButtonBaseProps> {}

export interface ImageProps extends BoxProps {}

export interface SvgProps extends BoxProps {
  viewBox?: string;
  xmlns?: string;
  fill?: string;
}

export interface OverlayProps extends BoxProps {}
