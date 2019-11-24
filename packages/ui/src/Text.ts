import styled from 'styled-components';
import Box from './Box';
import { TextProps } from './types';

const Text = styled(Box)<TextProps>({});

Text.defaultProps = {
  as: 'span',
  tx: 'texts',
  variant: 'default',
  __css: {
    fontSize: '14px'
  }
};

Text.displayName = 'Text';

export default Text;
