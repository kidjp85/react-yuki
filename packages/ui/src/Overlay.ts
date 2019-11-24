import styled from 'styled-components';
import { OverlayProps } from './types';
import Box from './Box';

const Overlay = styled(Box)<OverlayProps>({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
});

Overlay.defaultProps = {
  __css: {
    position: 'absolute'
  }
};

Overlay.displayName = 'Overlay';

export default Overlay;
