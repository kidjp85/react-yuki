import React, { FunctionComponent } from 'react';
import { WithIcon, WrapperProps } from './types';
import useHover from './useHover';

const withIcon: WithIcon = (IconName, Content) => {
  const Wrapper: FunctionComponent<WrapperProps> = ({
    color,
    hoveredColor,
    viewBox,
    strokeWidth,
    ...rest
  }) => {
    const [isHovered, events] = useHover();

    const fillColor = isHovered && hoveredColor ? hoveredColor : color;

    return (
      <svg viewBox={viewBox} {...rest} {...events}>
        <Content color={fillColor} strokeWidth={strokeWidth} />
      </svg>
    );
  };

  Wrapper.displayName = IconName;

  Wrapper.defaultProps = {
    width: 16,
    height: 16,
    viewBox: '0 0 48 48',
    color: '#ffffff',
    strokeWidth: 2
  };

  return Wrapper;
};

export default withIcon;
