import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';

import { dynStyles } from './styles';
interface IProps {
  tab: number;
  setTab: (tab: number) => void;
}

const TabsPeople = ({ tab, setTab }: IProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { tabStyle } = dynStyles(isMobile);

  return (
    <Tabs
      value={tab}
      onChange={(event, newValue) => setTab(newValue)}
      centered
      TabIndicatorProps={{
        style: { display: 'none' },
      }}
    >
      <Tab label='Defunciones' sx={tabStyle} />
      <Tab label='Desaparecidos' sx={tabStyle} />
    </Tabs>
  );
};

export default TabsPeople;
