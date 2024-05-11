import { Box, Container, Tab, Tabs, Typography, styled } from '@mui/material';
import { APARTMENTS_DATA } from '@/utils/constants';
import ApartmentCard from '@/components/Common/ApartmentCard';
import MobileHeader from '@/components/Common/MobileHeader';
import RumateFeedHeaderIcon from '@/assets/rumateFeedHeaderIcon';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '@/theme';
import { useEffect, useState } from 'react';
import HangLooseMisc from '@/assets/hang-loose-misc';
import { motion } from 'framer-motion';
import { CloudMisc } from '@/assets';
import { getUserByEmail, searchForCoincidences } from '../../../lib/firebase/actions';

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  overflow: hidden;
  position: relative;
`;

const StyledMobileHeader = styled(MobileHeader)`
  padding-left: 0;
  padding-right: 0;
`;

const StyledSubWrapper = styled(Box)`
  ${theme.mixins.layout};
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  position: relative;
`;

const StyledTitle = styled(Typography)``;

const StyledLikesWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 394px;
  border: 1px solid ${theme.palette.customColors.lightGray};
  border-radius: 4px;
`;

const StyledTabsWrapper = styled(Box)``;

const StyledTab = styled(Tab)`
  padding: 14px 60px;
  font-size: 16px;
`;

const StyledLikesContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
`;

const StyledHangLooseMisc = styled(motion.div)`
  z-index: 1;
  svg {
    height: 150px;
    width: 150px;
  }
`;

const StyledCloudMiscTop = styled(motion.div)`
  position: absolute;
  top: 35px;
  right: 20px;
  scale: 0.7;

  path {
    fill: ${theme.palette.customColors.lightGray};
  }
`;

const StyledCloudMiscBottom = styled(motion.div)`
  position: absolute;
  top: 60px;
  left: 20px;
  scale: 0.7;

  path {
    fill: ${theme.palette.customColors.lightGray};
  }
`;

const StyledLikesTitle = styled(Typography)`
  font-size: 20px;
`;

const apartment = APARTMENTS_DATA[0];

function HostiePage() {
  const [value, setValue] = useState(0);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const user = localStorage.getItem('user');
      getUserByEmail(JSON.parse(user || '{}')?.email).then((res) => {
        searchForCoincidences(res.data?.id)
          .then((res) => {
            setCards((res?.data as any) || []);
          })
          .finally(() => {
            setIsLoading(false);
          });
      });
    };
    fetchData();
  }, []);

  return (
    <StyledContainer>
      <StyledMobileHeader
        title='RuMate'
        leftComponent={<MenuIcon />}
        rightComponent={<RumateFeedHeaderIcon fill='#5FAEFF' stroke='#FFFFFF' />}
        onClickLeftComponent={() => {}}
      />
      <StyledSubWrapper>
        <StyledTitle variant='h2'>{`¡Hola ${apartment.user_name}!`}</StyledTitle>
        <ApartmentCard key={apartment.user_id} apartment={apartment} />
        <StyledLikesWrapper>
          <StyledTabsWrapper>
            <Tabs value={value} onChange={handleChange}>
              <StyledTab label='Likes' />
              <StyledTab label='Rumatch!' />
            </Tabs>
          </StyledTabsWrapper>

          <StyledLikesContent sx={{ p: 0 }}>
            {value === 0 && !cards.length && !isLoading && (
              <>
                <StyledHangLooseMisc>
                  <HangLooseMisc />
                </StyledHangLooseMisc>
                <StyledCloudMiscTop>
                  <CloudMisc />
                </StyledCloudMiscTop>
                <StyledCloudMiscBottom>
                  <CloudMisc />
                </StyledCloudMiscBottom>
                <StyledLikesTitle variant='h2'>¡Aún no hay likes!</StyledLikesTitle>
                <Typography textAlign={'center'} fontSize={14}>
                  Parece que tu publicación aún no ha recibido ningún like. ¡No te preocupes! Es normal que al principio
                  cueste un poco arrancar.
                </Typography>
              </>
            )}

            {value === 0 && (
              <Box
                sx={{
                  p: 0,
                  maxHeight: '300px',
                  overflow: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}>
                {(cards as any[]).map((card) => (
                  <ApartmentCard key={card?.user_id} apartment={card} displayImage={false} />
                ))}
              </Box>
            )}
          </StyledLikesContent>

          {value === 1 && (
            <Box sx={{ p: 0 }}>
              <Typography>Item Two</Typography>
            </Box>
          )}
        </StyledLikesWrapper>
      </StyledSubWrapper>
    </StyledContainer>
  );
}

export default HostiePage;
