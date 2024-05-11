import { BirdMisc, CloudMisc } from '@/assets';
import PinkHandMisc from '@/assets/pink-hand-misc';
import PinkLinesMisc from '@/assets/pink-lines-misc';
import SemiCircleMisc from '@/assets/semi-circle';
import YellowHandMisc from '@/assets/yellow-hand-misc';
import YellowLinesMisc from '@/assets/yellow-lines-misc';
import theme from '@/theme';
import { Box, Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';

const StyledWrapper = styled(motion.div)`
  background: ${theme.palette.customColors.white};
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const StyledSubWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 0 0 32px;
  position: relative;
`;

const StyledTitleAnimationWrapper = styled(motion.div)`
  z-index: 1;
`;

const StyledTitle = styled(Typography)`
  font-size: 36px;
  font-weight: 700;
  line-height: 40px;
`;

const StyledCloudMiscTop = styled(motion.div)`
  position: absolute;
  top: 200px;
  right: -100px;
  path {
    fill: ${theme.palette.customColors.lightGray};
  }
`;

const StyledCloudMiscBottom = styled(motion.div)`
  position: absolute;
  bottom: -350px;
  left: -120px;
  scale: 1.5;

  path {
    fill: ${theme.palette.customColors.lightGray};
  }
`;

const StyledBirdMiscLeft = styled(motion.div)`
  position: absolute;
  bottom: -150px;
  left: 85px;
  svg {
    transform: rotate(310deg);
  }
`;

const StyledBirdMiscRight = styled(motion.div)`
  position: absolute;
  bottom: -250px;
  right: 85px;
`;

const StyledSemiCircleMisc = styled(motion.div)`
  position: absolute;
  bottom: -180px;
  left: -10px;

  svg {
    height: 450px;
    width: 450px;
  }
`;

const StyledYellowHand = styled(motion.div)`
  position: absolute;
  z-index: 2;
  bottom: -10px;
  right: 200px;

  svg {
    height: 400px;
    width: 400px;
  }
`;

const StyledYellowLines = styled(motion.div)`
  position: absolute;
  bottom: 180px;
  right: -50px;

  svg {
    height: 200px;
    width: 200px;
  }
`;

const StyledPinkHand = styled(motion.div)`
  position: absolute;
  z-index: 1;
  bottom: -10px;
  left: 200px;

  svg {
    height: 400px;
    width: 400px;
  }
`;

const StyledPinkLines = styled(motion.div)`
  position: absolute;
  bottom: 200px;
  left: -10px;

  svg {
    height: 100px;
    width: 100px;
  }
`;

function CompletedScreen() {
  return (
    <StyledWrapper initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <StyledSubWrapper>
        <StyledTitleAnimationWrapper
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <StyledTitle>¡Completaste el registro&nbsp;éxitosamente!</StyledTitle>
        </StyledTitleAnimationWrapper>

        <StyledCloudMiscTop
          animate={{
            x: -50,
            y: 0,
            scale: 1,
            rotate: 0,
          }}>
          <CloudMisc />
        </StyledCloudMiscTop>
        <StyledCloudMiscBottom
          animate={{
            x: 50,
            y: 0,
            scale: 1,
            rotate: 0,
          }}>
          <CloudMisc />
        </StyledCloudMiscBottom>
        <StyledBirdMiscLeft
          animate={{
            x: 0,
            y: -50,
            scale: 1,
            rotate: 0,
          }}>
          <BirdMisc />
        </StyledBirdMiscLeft>
        <StyledBirdMiscRight
          animate={{
            x: 0,
            y: -50,
            scale: 1,
            rotate: 0,
          }}>
          <BirdMisc />
        </StyledBirdMiscRight>
      </StyledSubWrapper>
      <StyledYellowHand
        animate={{
          x: 100,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{ duration: 0.4 }}>
        <YellowHandMisc />
      </StyledYellowHand>
      <StyledYellowLines
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}>
        <YellowLinesMisc />
      </StyledYellowLines>
      <StyledPinkHand
        animate={{
          x: -100,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{ duration: 0.4 }}>
        <PinkHandMisc />
      </StyledPinkHand>
      <StyledPinkLines
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}>
        <PinkLinesMisc />
      </StyledPinkLines>

      <StyledSemiCircleMisc
        animate={{
          x: 0,
          y: -50,
          scale: 1,
          rotate: 0,
        }}
        transition={{ duration: 0.8 }}>
        <SemiCircleMisc />
      </StyledSemiCircleMisc>
    </StyledWrapper>
  );
}

export default CompletedScreen;
