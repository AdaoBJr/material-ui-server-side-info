import { SxProps, Theme } from '@mui/material';

export const SxBody: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: { xs: 'stretch', md: 'center' },
  alignItems: 'center',
  padding: 5,
  width: '100%',
  height: '100%',
};
