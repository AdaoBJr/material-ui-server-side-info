import React, { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { SxBody } from './styles';

export const Body: React.FC<PropsWithChildren> = ({ children }) => (
  <Box sx={SxBody}>{children}</Box>
);
