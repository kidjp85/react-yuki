import { useState } from 'react';
import { UseHover } from './types';

const useHover: UseHover = onHovered => {
  const [isHovered, setHovered] = useState(false);

  const events = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  };

  if (!onHovered) {
    return [false, {}];
  }

  return [isHovered, events];
};

export default useHover;
