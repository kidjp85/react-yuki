import styled from '@emotion/styled';
import { GridProps } from './types';
import Box from './Box';

const Grid = styled(Box)<GridProps>({
  display: 'grid'
});

Grid.displayName = 'Grid';

export default Grid;
