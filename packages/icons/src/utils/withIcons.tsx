import React, { FunctionComponent } from 'react';
import { WithIcon, IconProps } from './types';
import { useHover } from '@react-yuki/hooks';
import { Svg } from '@react-yuki/ui';

const withIcon: WithIcon = (IconName, Content) => {
  const Wrapper: FunctionComponent<IconProps> = ({
    color,
    hoveredColor,
    viewBox,
    strokeWidth,
    ...rest
  }) => {
    const [isHovered, events] = useHover(hoveredColor !== undefined);

    const fillColor = isHovered && hoveredColor ? hoveredColor : color;

    return (
      <Svg viewBox={viewBox} {...rest} {...events}>
        <Content color={fillColor} strokeWidth={strokeWidth} />
      </Svg>
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
