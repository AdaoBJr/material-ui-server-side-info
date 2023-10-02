import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { SxBody } from './styles';

interface BodyProps extends BoxProps {}

export const Body: React.FC<BodyProps> = ({ children, sx, ...rest }) => (
  <Box sx={SxBody(sx)} {...rest}>
    {children}
  </Box>
);
