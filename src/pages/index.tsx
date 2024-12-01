import {
  Button,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

import { dynStyles, styles } from '../styles/home/styles';
import Link from 'next/link';

const Home = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { button } = dynStyles(isMobile);

  return (
    <Grid2
      container
      alignItems='center'
      direction='column'
      spacing={2}
      sx={styles.root}
    >
      <Typography sx={styles.title} variant='h1' component={Link} href='/'>
        Valencia no olvida.
      </Typography>
      <Typography
        sx={styles.body1}
        variant='body1'
        width={{ xs: '260px', md: 'auto' }}
      >
        WEB DEDICADA A LOS FALLECIDOS Y DESAPARECIDOS POR LA DANA EN VALENCIA
      </Typography>
      <Button sx={button} variant='contained' href='/search'>
        Buscar
      </Button>
      <Button href='/register' sx={button} variant='outlined'>
        Registrar
      </Button>
    </Grid2>
  );
};

export default Home;
