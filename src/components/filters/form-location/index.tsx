import React from 'react';
import { Button, FormControl, useMediaQuery, useTheme } from '@mui/material';

import { dynStyles } from './styles';

interface IProps {
  locations: string[];
  locationFilter: string;
  setLocationFilter: (location: string) => void;
  showTotal?: boolean;
}

const FormLocation = ({
  locations,
  locationFilter,
  setLocationFilter,
  showTotal = false,
}: IProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { button, formControl } = dynStyles(isMobile);

  return (
    <FormControl sx={formControl}>
      {showTotal && (
        <Button
          onClick={() => setLocationFilter('all')}
          variant={locationFilter === 'all' ? 'contained' : 'outlined'}
          color='primary'
          sx={button}
        >
          Totales
        </Button>
      )}
      {locations.map((location) => (
        <Button
          key={location}
          onClick={() => setLocationFilter(location)}
          variant={
            locationFilter !== location && !isMobile ? 'outlined' : 'contained'
          }
          color='primary'
          sx={button}
        >
          {location}
        </Button>
      ))}
    </FormControl>
  );
};

export default FormLocation;
