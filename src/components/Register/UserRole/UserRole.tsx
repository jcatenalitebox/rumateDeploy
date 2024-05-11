import { styled, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import RumieSignUpImage from '@/assets/rumie-sign-up.svg';
import HostieSignUpImage from '@/assets/hostie-sign-up.svg';
import Image from 'next/image';
import MobileHeader from '@/components/Common/MobileHeader';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSteps } from '@/hooks/useSteps';
import { UserRoleEnum } from '@/types';
import { useFormContext } from 'react-hook-form';
import { useUserRole } from '@/hooks/useUserRole';

const CARDS_DATA = [
  {
    title: 'Hostie',
    image: HostieSignUpImage,
    role: UserRoleEnum.HOSTIE,
  },
  {
    title: 'Rumie',
    image: RumieSignUpImage,
    role: UserRoleEnum.RUMIE,
  },
];

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
  align-items: center;
  gap: 24px;
  width: 100%;
`;

const StyledCard = styled(Card)`
  gap: 20px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.2);
  max-width: 343px;
  cursor: pointer;
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

type Props = {
  signUpBaseNameForm: string;
};

function UserRole({ signUpBaseNameForm }: Props) {
  const { nextStep } = useSteps();
  const { setValue } = useFormContext();
  const { setUserRole } = useUserRole();

  const handleOnClickCard = (userType: UserRoleEnum) => {
    nextStep();
    setValue(`${signUpBaseNameForm}.firstStep.userRole`, userType);
    setUserRole(userType);
  };

  return (
    <StyledWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <MobileHeader title='Elegí tu perfil' />
      <StyledCardWrapper>
        {CARDS_DATA.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{
              y: 50,
            }}
            whileInView={{
              y: 0,
              transition: {
                duration: 0.5 + index * 0.3,
              },
            }}>
            <StyledCard onClick={() => handleOnClickCard(card.role)}>
              <StyledImageWrapper title={`${card.title} sign up image`}>
                <Image src={card.image} alt={`${card.title} sign up image`} />
              </StyledImageWrapper>
              <StyledCardContent>
                <StyledTypography>{card.title}</StyledTypography>
                <StyledIconButton />
              </StyledCardContent>
            </StyledCard>
          </motion.div>
        ))}
      </StyledCardWrapper>
    </StyledWrapper>
  );
}

export default UserRole;
