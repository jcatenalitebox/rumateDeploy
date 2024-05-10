import { LogoIcon, CloudMisc, BirdMisc } from '@/assets';
import RumieHostieMisc from '@/assets/rumie-hosti-misc';
import theme from '@/theme';
import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const StyledWrapper = styled(motion.div)`
  background: ${theme.palette.customColors.lightGray};
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const StyledSubWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 0 0 32px;
  position: relative;
`;

const StyledTitleAnimationWrapper = styled(motion.div)`
  z-index: 1;
`;

const StyledTitle = styled(Typography)`
  font-weight: 700;
  font-size: 56px;
  line-height: 56px;
  max-width: 253px;
`;

const StyledLogoIcon = styled(LogoIcon)`
  margin-left: 8px;
`;

const StyledCloudMiscTop = styled(motion.div)`
  position: absolute;
  top: 130px;
  right: -80px;
`;

const StyledCloudMiscBottom = styled(motion.div)`
  position: absolute;
  bottom: -120px;
  left: -80px;
`;

const StyledBirdMisc = styled(motion.div)`
  position: absolute;
  bottom: -120px;
  left: 85px;
`;

const StyledRumieHostieMisc = styled(motion.div)`
  position: absolute;
  bottom: -70px;
  right: -10px;
`;

const WelcomeScreen = () => {
  return (
    <AnimatePresence>
      <StyledWrapper initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
        <StyledSubWrapper>
          <motion.div
            animate={{
              x: 0,
              y: 20,
              scale: 1,
              rotate: 0,
            }}>
            <StyledLogoIcon />
          </motion.div>
          <StyledTitleAnimationWrapper
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <StyledTitle>Encontrá tu rumate ideal</StyledTitle>
          </StyledTitleAnimationWrapper>

          {/* Misc */}
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
          <StyledBirdMisc
            animate={{
              x: 0,
              y: -50,
              scale: 1,
              rotate: 0,
            }}>
            <BirdMisc />
          </StyledBirdMisc>
        </StyledSubWrapper>
        <StyledRumieHostieMisc
          animate={{
            x: 0,
            y: -50,
            scale: 1,
            rotate: 0,
          }}
          transition={{ duration: 0.8 }}>
          <RumieHostieMisc />
        </StyledRumieHostieMisc>
        {/* Misc */}
      </StyledWrapper>
    </AnimatePresence>
  );
};

export default WelcomeScreen;
