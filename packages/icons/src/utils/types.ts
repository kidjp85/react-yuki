import { FC } from 'react';
import { SvgProps } from '@react-yuki/ui/lib/types';

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

export type WithIcon = (IconName: string, Component: FC<ContentProps>) => FC<IconProps>;

export type UseHoverResponse = [
  boolean,
  {
    onMouseEnter: (e: React.MouseEvent) => void;
    onMouseLeave: (e: React.MouseEvent) => void;
  }
];

export type UseHover = () => UseHoverResponse;
