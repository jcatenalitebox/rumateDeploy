import { styled, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import RumieSignUpImage from '../../assets/rumie-sign-up.svg';
import HostieSignUpImage from '../../assets/hostie-sign-up.svg';
import Image from 'next/image';
import MobileHeader from '@/components/Common/MobileHeader';

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
          <StyledImageWrapper title='rumie sign up image'>
            <Image src={HostieSignUpImage} alt='hostie sign up image' />
          </StyledImageWrapper>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
          </CardContent>
        </StyledCard>
        <StyledCard>
          <StyledImageWrapper title='rumie sign up image'>
            <Image src={RumieSignUpImage} alt='hostie sign up image' />
          </StyledImageWrapper>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
          </CardContent>
        </StyledCard>
      </StyledCardWrapper>
    </StyledWrapper>
  );
}

export default SignUpPage;
