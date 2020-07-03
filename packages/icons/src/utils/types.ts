import { FC } from 'react';
import { SvgProps } from '@react-yuki/ui';

export interface ContentProps extends SvgProps {
  color?: string;
  strokeWidth?: number;
}

export interface IconProps extends ContentProps {
  width: number | string;
  height?: number | string;
  viewBox?: string;
  hoveredColor?: string;
}

export type WithIcon = (
  iconName: string,
  Component: FC<ContentProps>,
  viewbox?: string
) => FC<IconProps>;
