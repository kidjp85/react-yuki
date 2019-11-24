import styled from 'styled-components';
import Box from './Box';
import { LinkProps } from './types';

const Link = styled(Box)<LinkProps>({});

Link.defaultProps = {
  as: 'button',
  tx: 'links',
  variant: 'default',
  __css: {
    cursor: 'pointer',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    verticalAlign: 'top'
  }
};

Link.displayName = 'Link';

export default Link;
