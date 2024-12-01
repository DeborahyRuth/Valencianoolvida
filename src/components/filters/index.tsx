import { Divider, Grid2, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { dynStyles, styles } from './styles';
import FormPeople from './form-people';
import FormLocation from './form-location';
import { IFilters } from '../../types/interfaces';
import AccordionLocation from './accordion-location';
import { getCities, getProvinces } from '../../services/location';

interface IProps {
  filters?: IFilters;
  handleSubmit: (person: string, province: string, city: string) => void;
}

const Filters = ({ filters, handleSubmit }: IProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [personFilter, setPersonFilter] = React.useState<string>(
    filters?.person ?? 'both'
  );
  const [provinceFilter, setProvinceFilter] = React.useState<string>(
    filters ? filters.province : ''
  );
  const [cityFilter, setCityFilter] = React.useState<string>(
    filters ? filters.city : ''
  );
  const [provinces, setProvinces] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const { dividerH, root } = dynStyles(isMobile);

  const fetchProvincesData = async () => {
    try {
      const provincesSet = await getProvinces();
      setProvinces(provincesSet);
    } catch (error) {
      console.error('Error fetching provinces data:', error);
    }
  };

  const fetchCitiesData = async () => {
    try {
      const citiesSet = await getCities(provinceFilter);
      setCities(citiesSet);
    } catch (error) {
      console.error('Error fetching cities data:', error);
    }
  };

  useEffect(() => {
    fetchProvincesData();
  }, []);

  useEffect(() => {
    if (provinceFilter) fetchCitiesData();
  }, [provinceFilter]);

  const onClickCity = (city: string) => {
    setCityFilter(city);
    handleSubmit(personFilter, provinceFilter, city);
  };

  return (
    <Grid2
      container
      direction={{ xs: 'row', md: 'column' }}
      justifyContent='center'
      sx={root}
      spacing={{ xs: 1, md: 0 }}
    >
      <FormPeople
        personFilter={personFilter}
        setPersonFilter={(person: string) => setPersonFilter(person)}
      />
      <Divider orientation='horizontal' sx={dividerH} />
      {provinces !== undefined &&
        (isMobile ? (
          <AccordionLocation
            provinces={provinces}
            provinceFilter={provinceFilter}
            setProvinceFilter={(province: string) =>
              setProvinceFilter(province)
            }
            cities={cities}
            cityFilter={cityFilter}
            setCityFilter={onClickCity}
          />
        ) : (
          <Grid2
            container
            direction={{ xs: 'column', md: 'row' }}
            justifyContent='space-between'
          >
            <Grid2 size={{ md: 5 }} overflow='auto'>
              <FormLocation
                locations={provinces}
                locationFilter={provinceFilter}
                setLocationFilter={(province: string) =>
                  setProvinceFilter(province)
                }
              />
            </Grid2>
            <Grid2 size={{ xs: 0, md: 1 }}>
              <Divider orientation='vertical' sx={styles.dividerV} />
            </Grid2>
            <Grid2 size={{ md: 6 }} overflow='auto' textAlign='right'>
              {cities !== undefined && (
                <FormLocation
                  locations={cities}
                  locationFilter={cityFilter}
                  setLocationFilter={onClickCity}
                />
              )}
            </Grid2>
          </Grid2>
        ))}
    </Grid2>
  );
};

export default Filters;
