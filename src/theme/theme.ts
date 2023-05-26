import { createTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';

export const theme = createTheme(
  {
    //        0  1  2  3   4   5   6   7   8   9   10  11  12  13
    spacing: [0, 4, 8, 12, 14, 16, 20, 24, 32, 40, 48, 56, 64, 80],
    breakpoints: {
      values: {
        xs: 0,
        sm: 641,
        md: 1024,
        lg: 1280,
        xl: 1920,
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#00B37E',
        dark: '#007d58',
        light: '#33c297',
        contrastText: '#fff',
      },
      secondary: {
        main: '#00875F',
        dark: '#005e42',
        light: '#339f7f',
        contrastText: '#fff',
      },
      grey: {
        '100': '#E1E1E6',
        '200': '#A9A9B2',
        '400': '#7C7C8A',
        '500': '#323238',
        '600': '#323238',
        '800': '#202024',
        '900': '#121214',
        A100: '#383838',
        A200: '#262626',
      },
      background: {
        default: '#FAFAFA',
        paper: '#fff',
      },
      text: {
        primary: '#fff',
      },
      warning: {
        main: '#DB4437',
        dark: '#992f26',
        light: '#e2695f',
      },
    },
    typography: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      h1: {
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 800,
        lineHeight: 1.5,
      },
      body1: {
        color: '#fff',
        fontWeight: 400,
        fontSize: '1rem',
      },
      body2: {
        color: '#A9A9B2',
        fontWeight: 400,
        fontSize: '1rem',
      },
    },
    shape: {
      borderRadius: 2.5,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 6,
          },
        },
      },
    },
  },
  ptBR
);
