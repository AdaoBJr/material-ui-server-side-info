import React from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import { AppProps as AppPropsNext } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';

import { SxApp } from './app.styles';
import { theme, createEmotionCache } from 'theme';

const clientSideEmotionCache = createEmotionCache();

export interface AppProps extends AppPropsNext {
  emotionCache?: EmotionCache;
}

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={SxApp}>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  </CacheProvider>
);

export default App;
