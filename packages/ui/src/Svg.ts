import styled from 'styled-components';
import Box from './Box';
import { SvgProps } from './types';

const Svg = styled(Box)<SvgProps>({});

Svg.defaultProps = {
  as: 'svg',
  variant: 'svg',
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 16 16',
  width: 16,
  height: 16,
  fill: 'currentColor'
};

Svg.displayName = 'Svg';

export default Svg;
