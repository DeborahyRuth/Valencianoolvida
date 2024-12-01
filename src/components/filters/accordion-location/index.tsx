import React from 'react';
import { Button, FormControl, useMediaQuery, useTheme } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { dynStyles } from './styles';
import FormLocation from '../form-location';

interface IProps {
  provinces: string[];
  provinceFilter: string;
  setProvinceFilter: (province: string) => void;
  cities: string[] | undefined;
  cityFilter: string;
  setCityFilter: (city: string) => void;
}

const AccordionLocation = ({
  provinces,
  provinceFilter,
  setProvinceFilter,
  cities,
  cityFilter,
  setCityFilter,
}: IProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { button, formControl } = dynStyles(isMobile);

  const handleAccordion = (province: string) => {
    if (provinceFilter === province) setProvinceFilter('');
    else setProvinceFilter(province);
  };
  return (
    <FormControl sx={formControl}>
      {provinces.map((province, index) => (
        <div key={index}>
          <Button
            key={province}
            onClick={() => handleAccordion(province)}
            variant={provinceFilter === province ? 'contained' : 'outlined'}
            color='primary'
            sx={button}
            endIcon={
              provinceFilter === province ? (
                <ArrowUpwardIcon />
              ) : (
                <ArrowDownwardIcon />
              )
            }
          >
            {province}
          </Button>
          {provinceFilter === province && cities !== undefined && (
            <FormLocation
              key={index}
              locations={cities}
              locationFilter={cityFilter}
              setLocationFilter={setCityFilter}
            />
          )}
        </div>
      ))}
    </FormControl>
  );
};

export default AccordionLocation;
