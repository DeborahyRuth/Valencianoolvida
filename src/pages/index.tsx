import {
  Button,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';

import Filters from '../components/filters';
import ListPeople from '../components/list-people';
import { dynStyles, styles } from '../styles/home/styles';
import { IFilters } from '../types/interfaces';

const Home = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [showList, setShowList] = useState<boolean>(false);
  const [filters, setFilters] = useState<IFilters>({
    person: '',
    province: '',
    city: '',
  });

  const { button } = dynStyles(isMobile);

  const handleSubmit = (person: string, province: string, city: string) => {
    setFilters({
      person,
      province,
      city,
    });
    setShowFilters(false);
    setShowList(true);
  };

  return (
    <Grid2
      container
      alignItems='center'
      direction='column'
      spacing={2}
      sx={styles.root}
    >
      <Typography sx={styles.h1} variant='h1'>
        Valencia no olvida.
      </Typography>
      <Typography
        sx={styles.body1}
        variant='body1'
        width={{ xs: '260px', md: 'auto' }}
      >
        WEB DEDICADA A LOS FALLECIDOS Y DESAPARECIDOS POR LA DANA EN VALENCIA
      </Typography>
      {!showFilters && !showList && (
        <Button
          sx={button}
          variant='contained'
          onClick={() => setShowFilters(true)}
        >
          Buscar
        </Button>
      )}
      <Button href='/register' sx={button} variant='outlined'>
        Registrar
      </Button>
      {showFilters && <Filters handleSubmit={handleSubmit} />}
      {showList && <ListPeople filters={filters} handleSubmit={handleSubmit} />}
    </Grid2>
  );
};

export default Home;
