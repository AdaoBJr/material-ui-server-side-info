import React from 'react';
import { Grid, Stack } from '@mui/material';

import { home } from 'articles';
import { Body, Title } from 'lib/shared';
import { SxSubTitleHome, SxTitleHome } from './styles';

const Home: React.FC = () => {
  return (
    <Body>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Stack rowGap={7} marginLeft={{ xs: 0, sm: 12 }}>
            <Title variant="h1" sx={SxTitleHome}>
              {home.title}
            </Title>
            <Title variant="body2" sx={SxSubTitleHome}>
              {home.subTitle}
            </Title>
          </Stack>
        </Grid>
      </Grid>
    </Body>
  );
};

export default Home;
