import { Box, Container, InputAdornment, TextField, Typography, styled } from '@mui/material';
import { APARTMENTS_DATA } from './apartmentsData';
import ApartmentCard from '@/components/Common/ApartmentCard';
import SearchIcon from '@mui/icons-material/Search';
import MobileHeader from '@/components/Common/MobileHeader';
import RumateFeedHeaderIcon from '@/assets/rumateFeedHeaderIcon';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '@/theme';
import RumieEmptyState from '@/components/Common/RumieEmptyState';

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
  // const [search, setSearch] = useState([] as string[]);
  // const [city, setCity] = useState('All' as string);

  // const cities = Array.from(new Set(APARTMENTS_DATA.map((apartment) => apartment.city)) as Set<string>);

  // const handleSearch = (values: string[]) => {
  //   setSearch(values);
  // };

  // const handleDropdown = (event: any) => {
  //   setCity(event.target.value);
  // };

  // const filteredItems = useMemo(() => {
  //   if (search.length === 0 && city === 'All') return APARTMENTS_DATA;

  //   const filteredData = APARTMENTS_DATA.filter((apartment) => {
  //     const stylizedCity = apartment.city.toUpperCase();

  //     return (
  //       (city === 'All' || apartment.city === city) &&
  //       (search.length === 0 || search.some((value) => stylizedCity.includes(value.toUpperCase())))
  //     );
  //   });

  //   return filteredData;
  // }, [search, city]);

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
        />
        <StyledResultsText variant='h4'>Resultados: 0</StyledResultsText>
      </StyledInputWrapper>
      {APARTMENTS_DATA.length > 0 ? (
        APARTMENTS_DATA.map((apartment) => <ApartmentCard key={apartment.user_id} apartment={apartment} />)
      ) : (
        <RumieEmptyState />
      )}
    </StyledContainer>
  );
}

export default RumiePage;
