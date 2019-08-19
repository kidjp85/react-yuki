import { MouseEvent } from 'react';

interface EventType {
  onMouseEnter?: (e: MouseEvent) => void;
  onMouseLeave?: (e: MouseEvent) => void;
}

export type UseHoverResponse = [boolean, EventType];

export type UseHover = (onHovered: boolean) => UseHoverResponse;
