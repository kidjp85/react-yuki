import { motion } from 'framer-motion';
import { BoxProps, OmitMotionProps } from './types';
import Box from './Box';

const Animated = motion.custom<OmitMotionProps<BoxProps>>(Box);

export default Animated;
