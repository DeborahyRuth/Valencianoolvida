import {
  Box,
  Button,
  Container,
  Divider,
  InputAdornment,
  Modal,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';

import ListDeceased from './list-deceased';
import TabsPeople from './tabs-people';
import { IAffected, IFilters } from '../../types/interfaces';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';

import { dynStyles, styles } from './styles';
import Filters from '../filters';
import { getAffected } from '../../services/affected';

interface IProps {
  filters: IFilters;
  handleSubmit: (person: string, province: string, city: string) => void;
}

const ListPeople = ({ filters, handleSubmit }: IProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [tab, setTab] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');

  const { body1, button, textField } = dynStyles(isMobile);

  const [deceasedData, setDeceasedData] = useState<IAffected[]>([]);
  const [missingData, setMissingData] = useState<IAffected[]>([]);
  const [isLastDeceasedPage, setIsLastDeceasedPage] = useState(false);
  const [isLastMissingPage, setIsLastMissingPage] = useState(false);
  const [lastDeceasedVisible, setLastDeceasedVisible] = useState<string | null>(
    null
  );
  const [lastMissingVisible, setLastMissingVisible] = useState<string | null>(
    null
  );

  const fetchDeceasedData = async (concat: boolean, loadMore = false) => {
    try {
      const response = await getAffected({
        db_name: 'deceased',
        city: filters.city,
        person: filters.person,
        province: filters.province,
        searchQuery,
        pageSize: 10,
        lastVisibleId: lastDeceasedVisible,
        loadMore,
      });

      if (concat)
        setDeceasedData((prevData) => [...prevData, ...response.affectedData]);
      else setDeceasedData(response.affectedData);
      setLastDeceasedVisible(response.lastVisible);
      setIsLastDeceasedPage(response.isLastPage);
    } catch (error) {
      console.error('Error fetching deceased data:', error);
    }
  };

  const fetchMissingData = async (concat: boolean, loadMore = false) => {
    try {
      const response = await getAffected({
        db_name: 'missing',
        city: filters.city,
        person: filters.person,
        province: filters.province,
        searchQuery,
        pageSize: 10,
        lastVisibleId: lastMissingVisible,
        loadMore,
      });

      if (concat)
        setMissingData((prevData) => [...prevData, ...response.affectedData]);
      else setMissingData(response.affectedData);
      setLastMissingVisible(response.lastVisible);
      setIsLastMissingPage(response.isLastPage);
    } catch (error) {
      console.error('Error fetching missing data:', error);
    }
  };

  useEffect(() => {
    setDeceasedData([]);
    setMissingData([]);
    if (tab === 0 && filters.city !== deceasedData?.[0]?.city) {
      fetchDeceasedData(true);
    } else if (tab === 1 && filters.city !== missingData?.[0]?.city) {
      fetchMissingData(true);
    }
  }, [filters]);

  useEffect(() => {
    if (tab === 0) {
      fetchDeceasedData(false);
    } else if (tab === 1) {
      fetchMissingData(false);
    }
  }, [searchQuery]);

  const loadMore = () => {
    if (tab === 0) fetchDeceasedData(true, true);
    else fetchMissingData(true, true);
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearchQuery(value);
      }, 300),
    []
  );

  const handleSearchQuery = (value: string) => {
    setSearchInput(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleTabs = (num: number) => {
    setTab(num);
    cleanList();
    setSearchInput('');
    if (num === 0 && deceasedData.length === 0) fetchDeceasedData(false);
    else if (num === 1 && missingData.length === 0) fetchMissingData(false);
  };

  const cleanList = () => {
    setSearchQuery('');
    setOpen(false);
    setLastDeceasedVisible(null);
    setLastMissingVisible(null);
  };

  const onSubmit = (person: string, province: string, city: string) => {
    cleanList();
    handleSubmit(person, province, city);
  };

  return (
    <Container>
      <TabsPeople tab={tab} setTab={(num) => handleTabs(num)} />
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        sx={styles.stack}
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={{ xs: 1, md: 2 }}
        >
          <Button
            variant='outlined'
            endIcon={<TuneIcon />}
            onClick={() => setOpen(true)}
            sx={button}
          >
            Filtrar
          </Button>
          <TextField
            id='search-name'
            label='Buscar'
            size='small'
            value={searchInput}
            sx={textField}
            onChange={(e) => handleSearchQuery(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position='end'>
                    <SearchIcon sx={body1} />
                  </InputAdornment>
                ),
              },
            }}
            variant='outlined'
          />
        </Stack>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <Typography variant='subtitle1' sx={styles.subtitle1}>
            {filters.city}
          </Typography>
          <Typography variant='body1' sx={body1}>{`Total: ${
            (tab === 0 ? deceasedData?.length : missingData.length) ?? 0
          }`}</Typography>
        </Stack>
      </Stack>
      <Divider sx={styles.divider} />
      {tab === 0 && deceasedData !== undefined && (
        <>
          <ListDeceased deceasedData={deceasedData} />
          {!isLastDeceasedPage && (
            <Button onClick={loadMore}>Cargar más</Button>
          )}
        </>
      )}
      {tab === 1 && missingData !== undefined && (
        <>
          <ListDeceased deceasedData={missingData} />
          {!isLastMissingPage && <Button onClick={loadMore}>Cargar más</Button>}
        </>
      )}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={styles.modalContainer}
      >
        <Box sx={styles.box}>
          <Filters filters={filters} handleSubmit={onSubmit} />
        </Box>
      </Modal>
    </Container>
  );
};

export default ListPeople;
