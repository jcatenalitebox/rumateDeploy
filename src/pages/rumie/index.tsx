import { Box, Container, InputAdornment, TextField, Typography, styled } from '@mui/material';
//import { APARTMENTS_DATA } from '@/utils/constants';
import ApartmentCard from '@/components/Common/ApartmentCard';
import SearchIcon from '@mui/icons-material/Search';
import MobileHeader from '@/components/Common/MobileHeader';
import RumateFeedHeaderIcon from '@/assets/rumateFeedHeaderIcon';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '@/theme';
import RumieEmptyState from '@/components/Common/RumieEmptyState';
import { Key, useEffect, useMemo } from 'react';
import { getUserByEmail, searchForCoincidences } from '../../../lib/firebase/actions';
import { useState } from 'react';

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const StyledMobileHeader = styled(MobileHeader)`
  padding-left: 0;
  padding-right: 0;
`;

const StyledInputWrapper = styled(Box)`
  width: 100%;
`;

const StyledInput = styled(TextField)`
  width: 100%;
`;

const StyledResultsText = styled(Typography)`
  margin-top: 16px;
  color: ${theme.palette.customColors.darkGray};
`;

function RumiePage() {
  const [search, setSearch] = useState('');
  const [cards, setCards] = useState([] as any[]);
  // const [city, setCity] = useState('All' as string);

  // const cities = Array.from(new Set(APARTMENTS_DATA.map((apartment) => apartment.city)) as Set<string>);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const filteredItems = useMemo(() => {
    if (search === '') return cards;

    const filteredData = cards.filter((apartment) => {
      const stylizedState = apartment.state.toUpperCase();
      const stylizedCity = apartment.city.toUpperCase();

      return stylizedState.includes(search.toUpperCase()) || stylizedCity.includes(search.toUpperCase());
    });

    return filteredData;
  }, [cards, search]);

  useEffect(() => {
    const fetchData = async () => {
      const user = localStorage.getItem('user');
      getUserByEmail(JSON.parse(user || '{}')?.email).then((res) => {
        searchForCoincidences(res.data?.id).then((res) => {
          setCards(res?.data || []);
        });
        searchForCoincidences(res.data?.id).then(() => {});
      });
    };
    fetchData();
  }, []);

  return (
    <StyledContainer>
      <StyledMobileHeader
        title='RuMate'
        leftComponent={<MenuIcon />}
        rightComponent={<RumateFeedHeaderIcon />}
        onClickLeftComponent={() => {}}
      />
      <StyledInputWrapper>
        <StyledInput
          label='Buscar ciudad o barrio'
          size='small'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <StyledResultsText variant='h4'>{`Resultados ${filteredItems.length}`}</StyledResultsText>
      </StyledInputWrapper>
      {filteredItems.length > 0 ? (
        filteredItems.map((apartment: { user_id: Key | null | undefined }) => (
          <ApartmentCard key={apartment.user_id} apartment={apartment} />
        ))
      ) : (
        <RumieEmptyState />
      )}
    </StyledContainer>
  );
}

export default RumiePage;
