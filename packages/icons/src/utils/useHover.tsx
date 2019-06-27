import { useState } from 'react';
import { UseHover } from './types';

const useHover: UseHover = onHovered => {
  if (!onHovered) {
    return [false, {}];
  }

  const [isHovered, setHovered] = useState(false);

  const events = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  };

  return [isHovered, events];
};

export default useHover;
