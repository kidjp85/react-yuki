import { MouseEvent, RefObject } from 'react';

interface EventType {
  onMouseEnter?: (e: MouseEvent) => void;
  onMouseLeave?: (e: MouseEvent) => void;
}

export type UseHoverResponse = [boolean, EventType];

export type UseHover = (onHovered: boolean) => UseHoverResponse;

interface UseScrollToBottomResponse {
  ref: RefObject<HTMLDivElement>;
  scrollToBottom: () => void;
}

export type UseScrollToBottom = <T>(prop: T) => UseScrollToBottomResponse;
