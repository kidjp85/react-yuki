import styled from 'styled-components';
import Box from './Box';
import { HeadingProps } from './types';

const Heading = styled(Box)<HeadingProps>({});

Heading.defaultProps = {
  as: 'h2',
  tx: 'headings',
  variant: 'default',
  __css: {
    fontFamily: 'inherit',
    lineHeight: 'normal',
    wordBreak: 'break-word'
  }
};

Heading.displayName = 'Heading';

export default Heading;
