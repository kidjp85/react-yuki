import styled from '@emotion/styled';
import { FlexProps } from './types';
import Box from './Box';

const Flex = styled(Box)<FlexProps>({
  display: 'flex'
});

Flex.displayName = 'Flex';

export default Flex;
