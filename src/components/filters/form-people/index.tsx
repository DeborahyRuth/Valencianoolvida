import React from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { dynStyles, styles } from './styles';

interface IProps {
  personFilter: string;
  setPersonFilter: (person: string) => void;
}

const FormPeople = ({ personFilter, setPersonFilter }: IProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { formControl } = dynStyles(isMobile);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonFilter((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl sx={formControl}>
      <RadioGroup
        row
        name='person-buttons-group'
        value={personFilter}
        onChange={handleChange}
      >
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <FormControlLabel
            value='people'
            control={<Radio sx={styles.radio} />}
            label='Personas'
          />
          <FormControlLabel
            value='pet'
            control={<Radio sx={styles.radio} />}
            label='Animales'
          />
          <FormControlLabel
            value='both'
            control={<Radio sx={styles.radio} />}
            label='Ambos'
          />
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};

export default FormPeople;
