import { List, ListItemButton, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

import { dynStyles, styles } from './styles';
import DeceasedItem from './deceased-item';
import DeceasedSelected from './deceased-selected';
import { IAffected } from '../../../types/interfaces';

interface IProps {
  deceasedData: IAffected[];
}

const ListDeceased = ({ deceasedData }: IProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selected, setSelected] = React.useState(0);

  const { list } = dynStyles(isMobile);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelected(index);
  };

  return (
    <List sx={list}>
      {deceasedData?.map((deceased, index) => (
        <ListItemButton
          key={index}
          onClick={(event) => handleListItemClick(event, index)}
          sx={styles.listItemButton}
        >
          {selected === index ? (
            <DeceasedSelected key={index} deceased={deceased} index={index} />
          ) : (
            <DeceasedItem key={index} deceased={deceased} index={index} />
          )}
        </ListItemButton>
      ))}
    </List>
  );
};

export default ListDeceased;
