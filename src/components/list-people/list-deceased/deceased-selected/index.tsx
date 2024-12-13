import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IAffected } from '../../../../types/interfaces';
import { Grid2, useMediaQuery, useTheme } from '@mui/material';

import { dynStyles, styles } from './styles';
import CarouselImages from './carousel';

interface IProps {
  deceased: IAffected;
  index: number;
}

const DeceasedSelected = ({ deceased, index }: IProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { card } = dynStyles(isMobile);

  return (
    <Card sx={card}>
      <Grid2
        container
        direction={{ xs: 'column', md: 'row' }}
        justifyContent='space-between'
      >
        {deceased?.images !== undefined && (
          <Grid2 size={{ md: 3 }}>
            <CarouselImages
              images={deceased.images}
              fullName={deceased.fullName}
            />
          </Grid2>
        )}
        <Grid2 size={{ xs: 1 }} alignSelf='flex-end' display={{ md: 'none' }}>
          <Typography
            variant='body1'
            sx={styles.body}
          >{`#${index+1}`}</Typography>
        </Grid2>
        <Grid2 size={{ md: 8 }} width='100%'>
          <CardContent>
            <Typography variant='h3' sx={styles.fullName}>{deceased.fullName}</Typography>
            {deceased?.nickname && (
              <Typography variant='subtitle1'>{deceased.nickname}</Typography>
            )}
            <Typography variant='body1' sx={styles.description}>
              {deceased.description}
            </Typography>
          </CardContent>
        </Grid2>
        <Grid2
          size={{ md: 1 }}
          display={{ xs: 'none', md: 'flex' }}
          justifyContent='flex-end'
        >
          <Typography
            variant='body1'
            sx={styles.body}
          >{`#${index+1}`}</Typography>
        </Grid2>
      </Grid2>
    </Card>
  );
};
export default DeceasedSelected;
