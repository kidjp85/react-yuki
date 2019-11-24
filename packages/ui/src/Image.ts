import styled from 'styled-components';
import Box from './Box';
import { ImageProps } from './types';

const Image = styled(Box)<ImageProps>({});

Image.defaultProps = {
  as: 'img',
  __css: {
    maxWidth: '100%',
    height: 'auto'
  }
};

Image.displayName = 'Image';

export default Image;
