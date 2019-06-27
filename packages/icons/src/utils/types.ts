import { FC, MouseEvent } from 'react';
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

export type WithIcon = (IconName: string, Component: FC<ContentProps>) => FC<IconProps>;

interface EventType {
  onMouseEnter?: (e: MouseEvent) => void;
  onMouseLeave?: (e: MouseEvent) => void;
}

export type UseHoverResponse = [boolean, EventType];

export type UseHover = (onHovered: boolean) => UseHoverResponse;
