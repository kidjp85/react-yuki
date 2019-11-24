import styled from 'styled-components';
import { grid } from 'styled-system';
import { GridProps } from './types';
import Box from './Box';

const Grid = styled(Box)<GridProps>(
  {
    display: 'grid'
  },
  grid
);

Grid.displayName = 'Grid';

export default Grid;
