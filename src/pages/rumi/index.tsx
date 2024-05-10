import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Card,
  CardContent,
  CardMedia,
  Container,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  styled,
} from '@mui/material';
import React, { useMemo, useState } from 'react';

const APARTMENTS_DATA = [
  {
    user_id: 1,
    user_name: 'María',
    state: 'CABA',
    city: 'Belgrano',
    apartment_price: 1394.56,
    apartment_description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    apartment_amenities: 'balcony',
    picture_url:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    user_id: 2,
    user_name: 'Agustín',
    state: 'Santa Fé',
    city: 'Rosario',
    apartment_price: 3462.97,
    apartment_description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    apartment_amenities: 'gym',
    picture_url:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    user_id: 3,
    user_name: 'Ana',
    state: 'CABA',
    city: 'Palermo',
    apartment_price: 4019.18,
    apartment_description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sean lectu eget orci vehicula condimentum.',
    apartment_amenities: 'gym',
    picture_url:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    user_id: 4,
    user_name: 'Ezequiel',
    state: 'CABA',
    city: 'Caballito',
    apartment_price: 4537.03,
    apartment_description: 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    apartment_amenities: 'balcony',
    picture_url:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    user_id: 5,
    user_name: 'Patricio',
    state: 'CABA',
    city: 'Colegiales',
    apartment_price: 4335.37,
    apartment_description: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget,  dui.',
    apartment_amenities: 'parking',
    picture_url:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    user_id: 6,
    user_name: 'Jose',
    state: 'CABA',
    city: 'Once',
    apartment_price: 3256.68,
    apartment_description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orcementum eu, interdum eu, est.',
    apartment_amenities: 'pool',
    picture_url:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    user_id: 7,
    user_name: 'Martín',
    state: 'Córdoba',
    city: 'Nueva Córdoba',
    apartment_price: 2432.82,
    apartment_description: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    apartment_amenities: 'pool',
    picture_url:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    user_id: 8,
    user_name: 'Juana',
    state: 'Santa Fé',
    city: 'Santa Fé',
    apartment_price: 4147.74,
    apartment_description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nullamus vel nulla eget eros elementum pellentesque.',
    apartment_amenities: 'gym',
    picture_url:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    user_id: 9,
    user_name: 'Martina',
    state: 'CABA',
    city: 'Nuñez',
    apartment_price: 4916.76,
    apartment_description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    apartment_amenities: 'parking',
    picture_url:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    user_id: 10,
    user_name: 'Pedro',
    state: 'CABA',
    city: 'Belgrano',
    apartment_price: 1231.67,
    apartment_description: 'Nam ultrices, libero non mattis pulvinar, nulla pede ulla suscipit ligula in lacus.',
    apartment_amenities: 'balcony',
    picture_url:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const StyledAccordion = styled(Accordion)`
  width: 100%;
  margin: 10px;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledSearch = styled(Autocomplete)`
  width: 100%;
`;

const StyledDropdown = styled(Select)`
  width: 100%;
`;

function RumiPage() {
  const [search, setSearch] = useState([] as string[]);
  const [city, setCity] = useState('All' as string);

  const cities = Array.from(new Set(APARTMENTS_DATA.map((apartment) => apartment.city)) as Set<string>);

  const handleSearch = (values: string[]) => {
    setSearch(values);
  };

  const handleDropdown = (event: any) => {
    setCity(event.target.value);
  };

  const filteredItems = useMemo(() => {
    if (search.length === 0 && city === 'All') return APARTMENTS_DATA;

    const filteredData = APARTMENTS_DATA.filter((apartment) => {
      const stylizedCity = apartment.city.toUpperCase();

      return (
        (city === 'All' || apartment.city === city) &&
        (search.length === 0 || search.some((value) => stylizedCity.includes(value.toUpperCase())))
      );
    });

    return filteredData;
  }, [search, city]);

  return (
    <StyledContainer>
      <StyledAccordion disableGutters>
        <AccordionSummary>Search Filters</AccordionSummary>
        <StyledAccordionDetails>
          <StyledSearch
            freeSolo
            multiple
            id='free-solo-demo'
            options={[]}
            renderInput={(params) => <TextField {...params} />}
            onChange={(_, value) => handleSearch(value as string[])}
          />
        </StyledAccordionDetails>
        <StyledAccordionDetails>
          <StyledDropdown onChange={handleDropdown}>
            <MenuItem value='All'>All</MenuItem>
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </StyledDropdown>
        </StyledAccordionDetails>
      </StyledAccordion>

      {filteredItems.map((apartment) => (
        <Card key={apartment.user_id}>
          <CardMedia sx={{ height: 140 }} image={apartment.picture_url} title='apartment image' />
          <CardContent>
            <List>
              <ListItem>{apartment.user_name}</ListItem>
              <ListItem>{apartment.state}</ListItem>
              <ListItem>{apartment.city}</ListItem>
              <ListItem>{apartment.apartment_price}</ListItem>
              <ListItem>{apartment.apartment_description}</ListItem>
            </List>
          </CardContent>
        </Card>
      ))}
    </StyledContainer>
  );
}

export default RumiPage;
