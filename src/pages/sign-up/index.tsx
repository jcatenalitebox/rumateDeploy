import { styled, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import RumieSignUpImage from '../../assets/rumie-sign-up.svg';
import HostieSignUpImage from '../../assets/hostie-sign-up.svg';
import Image from 'next/image';
import MobileHeader from '@/components/Common/MobileHeader';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  padding: 20px;
`;

const StyledCardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const StyledCard = styled(Card)`
  gap: 20px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.2);
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;

  :last-child {
    padding-bottom: 10px;
  }
`;

const StyledTypography = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
`;

const StyledIconButton = styled(ArrowForwardIcon)`
  color: rgba(27, 105, 248, 1);

  &:hover {
    background: none;
  }
`;

const StyledImageWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 206px;
  border-radius: 4px;

  img {
    overflow: hidden;
    object-fit: cover;
    object-position: center center;
    width: 100%;
  }
`;

function SignUpPage() {
  return (
    <StyledWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <MobileHeader title='Elegí tu perfil' />
      <StyledCardWrapper>
        <StyledCard>
          <StyledImageWrapper title='hostie sign up image'>
            <Image src={HostieSignUpImage} alt='hostie sign up image' />
          </StyledImageWrapper>
          <StyledCardContent>
            <StyledTypography>Hostie</StyledTypography>
            <StyledIconButton />
          </StyledCardContent>
        </StyledCard>
        <StyledCard>
          <StyledImageWrapper title='rumie sign up image'>
            <Image src={RumieSignUpImage} alt='hostie sign up image' />
          </StyledImageWrapper>
          <StyledCardContent>
            <StyledTypography>Rumie</StyledTypography>
            <StyledIconButton />
          </StyledCardContent>
        </StyledCard>
      </StyledCardWrapper>
    </StyledWrapper>
  );
}

export default SignUpPage;
