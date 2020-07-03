import React, { forwardRef } from 'react';
import { Svg } from '@react-yuki/ui';
import { WithIcon, IconProps } from './types';

const withIcon: WithIcon = (iconName, Content, viewbox = '0 0 48 48') => {
  const Wrapper = forwardRef<HTMLDivElement, IconProps>(({ strokeWidth, ...rest }, ref) => (
    <Svg {...rest} ref={ref} viewBox={viewbox}>
      <Content strokeWidth={strokeWidth} />
    </Svg>
  ));

  Wrapper.displayName = iconName;

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
