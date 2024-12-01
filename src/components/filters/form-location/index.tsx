import React from 'react';
import { Button, FormControl, useMediaQuery, useTheme } from '@mui/material';

import { dynStyles } from './styles';

interface IProps {
  locations: string[];
  locationFilter: string;
  setLocationFilter: (location: string) => void;
}

const FormLocation = ({
  locations,
  locationFilter,
  setLocationFilter,
}: IProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { button, formControl } = dynStyles(isMobile);

  return (
    <FormControl sx={formControl}>
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
