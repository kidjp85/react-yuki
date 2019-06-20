import { FC } from 'react';

export interface ContentProps {
  color?: string;
  strokeWidth?: number;
}

export interface WrapperProps extends ContentProps {
  width: number | string;
  height?: number | string;
  viewBox?: string;
  hoveredColor?: string;
}

export type WithIcon = (IconName: string, Component: FC<ContentProps>) => FC<WrapperProps>;

export type UseHoverResponse = [
  boolean,
  {
    onMouseEnter: (e: React.MouseEvent) => void;
    onMouseLeave: (e: React.MouseEvent) => void;
  }
];

export type UseHover = () => UseHoverResponse;
