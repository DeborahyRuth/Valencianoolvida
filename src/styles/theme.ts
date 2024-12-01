'use client';
import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: '#FFF',
      dark: '#6EB0ED',
      light: '#FFFFFF',
    },
    secondary: {
      main: '#6EB0ED',
    },
    background: {
      default: '#6EB0ED',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h3: {
      color: 'white',
      fontSize: '36px',
      fontWeight: '600',
    },
    h4: {
      color: 'white',
      fontSize: '24px',
      fontWeight: '600',
    },
    subtitle1: {
      color: 'white',
      fontSize: '20px',
      fontWeight: '400',
    },
    body1: {
      color: 'white',
      fontSize: '15px',
      fontWeight: '400',
    },
    body2: {
      color: 'white',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          maxHeight: '48px',
          maxWidth: '386px',
          textTransform: 'uppercase',
          borderRadius: '26px',
        },
        contained: {
          backgroundColor: 'white',
          color: '#6EB0ED',
        },
        outlined: {
          color: 'white',
          border: '1px solid white',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: 'none!important',
          padding: '0px!important',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          padding: '0px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          border: '1px solid white',
          borderTopLeftRadius: '26px',
          borderTopRightRadius: '26px',
          color: 'white',
          textTransform: 'capitalize',
          '&.Mui-selected': {
            backgroundColor: 'white',
            color: '#6EB0ED',
            border: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: 'white',
          borderRadius: '26px',
          borderColor: 'white',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
});

theme.typography.h1 = {
  [theme.breakpoints.down('md')]: {
    color: 'white',
    fontWeight: '600',
    fontSize: '43px',
  },
  [theme.breakpoints.up('md')]: {
    color: 'white',
    fontSize: '70px',
    fontWeight: '600',
  },
};

theme.typography.h2 = {
  [theme.breakpoints.down('md')]: {
    color: 'white',
    fontWeight: '600',
    fontSize: '44px',
    marginTop: '24px',
  },
  [theme.breakpoints.up('md')]: {
    color: 'white',
    fontSize: '60px',
    fontWeight: '600',
  },
};

export default theme;
