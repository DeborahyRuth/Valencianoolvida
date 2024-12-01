// components/ListItem.tsx
import {
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

import { dynStyles, styles } from './styles';
import { IAffected } from '../../../../types/interfaces';

interface IProps {
  deceased: IAffected;
  index: number;
}

const DeceasedItem = ({ deceased, index }: IProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { item } = dynStyles(isMobile);

  return (
    <ListItem alignItems='flex-start' sx={item}>
      <ListItemText
        primary={
          <Stack direction='row' justifyContent='space-between'>
            <Typography variant='body1' sx={styles.body}>
              {`${deceased.fullName} ${deceased?.nickname ? ` - ${deceased.nickname}` : ''}`}
            </Typography>
            <Typography
              variant='body1'
              sx={styles.body}
            >{`#${index}`}</Typography>
          </Stack>
        }
      />
    </ListItem>
  );
};
export default DeceasedItem;
