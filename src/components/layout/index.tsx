import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {
  CssBaseline,
  Typography,
  Container,
  Stack,
  Button,
  Grid2,
  Divider,
  useMediaQuery,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import theme from '../../styles/theme';
import { dynStyles, styles } from './styles';

interface IProps {
  children?: JSX.Element;
}

const Layout = ({ children }: IProps): JSX.Element => {
  const queryClient = new QueryClient();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { container, main } = dynStyles(isMobile);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={container}>
          <Stack
            direction='row'
            justifyContent={{ xs: 'center', md: 'space-between' }}
          >
            <Stack
              alignItems='center'
              direction='row'
              spacing={0.5}
              display={{ xs: 'none', md: 'flex' }}
            >
              <FavoriteIcon sx={styles.heartIcon} />
              <Typography variant='body2'>
                Creado por y para el pueblo
              </Typography>
            </Stack>

            <Stack alignItems='center' direction='row' spacing={0.5}>
              <Typography variant='body2'>Homenaje a</Typography>
              <Typography variant='body2' sx={styles.bold}>
                francisco quesada
              </Typography>
            </Stack>
          </Stack>
          <Container sx={main}>{children}</Container>
          <Grid2
            container
            alignItems='center'
            justifyContent={{ xs: 'center', md: 'flex' }}
            height={{ xs: '150px', md: 'auto' }}
            spacing={2}
          >
            <Stack
              alignItems='center'
              direction='row'
              spacing={0.5}
              display={{ md: 'none' }}
              justifyContent='center'
            >
              <FavoriteIcon sx={styles.heartIcon} />
              <Typography variant='body2'>
                Creado por y para el pueblo
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: 'column-reverse', md: 'row' }}
              justifyContent='space-between'
              alignItems='center'
              width='100%'
            >
              <Stack direction='row'>
                <Button variant='text'>Aviso Legal</Button>
                <Divider
                  flexItem
                  orientation='vertical'
                  sx={styles.divider}
                  variant='middle'
                />
                <Button variant='text'>Politica de privacidad</Button>
              </Stack>
              <Stack direction='row'>
                <Button variant='text' href='/'>
                  Inicio
                </Button>
                <Divider
                  flexItem
                  orientation='vertical'
                  variant='middle'
                  sx={styles.divider}
                />
                <Button variant='text' href='/search'>
                  Buscar
                </Button>
                <Divider
                  flexItem
                  orientation='vertical'
                  variant='middle'
                  sx={styles.divider}
                />
                <Button variant='text' href='/register'>
                  Registrar
                </Button>
              </Stack>
            </Stack>
          </Grid2>
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Layout;
