import LoginMisc from '@/assets/login-misc';
import theme from '@/theme';
import { Box, Button, InputAdornment, TextField, Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useRouter } from 'next/router';

const StyledWrapper = styled(motion.div)``;

const StyledTopMisc = styled(Box)`
  position: absolute;
  top: -100px;
  right: 0px;
`;

const StyledSubWrapper = styled(Box)`
  ${theme.mixins.layout};
  margin-top: 225px;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled(Typography)``;

const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: flex-end;
`;

const StyledInputsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`;

const StyledInput = styled(TextField)`
  width: 100%;
`;

const StyledForgotPasswordText = styled(Typography)`
  color: ${theme.palette.customColors.blue};
  margin-top: 10px;
`;

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;

const StyledConfirmButton = styled(Button)`
  margin-top: 22px;
`;

const StyledSignUpWrapper = styled(Box)`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const StyledSignUpText = styled(Typography)`
  color: ${theme.palette.customColors.blue};
`;

const LoginScreen = () => {
  const router = useRouter();

  return (
    <StyledWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <StyledTopMisc>
        <LoginMisc />
      </StyledTopMisc>
      <StyledSubWrapper>
        <StyledTitle variant='h2'>Hola!</StyledTitle>
        <StyledInputsWrapper>
          <StyledInput
            label='Correo Electrónico'
            size='small'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <StyledCloseIcon />
                </InputAdornment>
              ),
            }}
          />
          <StyledInput
            label='Contraseña'
            size='small'
            type='password'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <StyledCloseIcon />
                </InputAdornment>
              ),
            }}
          />
        </StyledInputsWrapper>
        <StyledLink href='/forgot-password'>
          <StyledForgotPasswordText variant='h4'>¿Olvidaste tu contraseña?</StyledForgotPasswordText>
        </StyledLink>

        {/* TODO add disabled state if no value on the input */}
        <StyledConfirmButton variant='contained' onClick={() => router.push('/rumie')}>
          Iniciar Sesión
        </StyledConfirmButton>
        <StyledSignUpWrapper>
          <Typography variant='subtitle1' lineHeight='20px'>
            ¿No tenes cuenta?
          </Typography>
          <StyledLink href='/signup'>
            <StyledSignUpText variant='h4'>Registrate</StyledSignUpText>
          </StyledLink>
        </StyledSignUpWrapper>
      </StyledSubWrapper>
    </StyledWrapper>
  );
};

export default LoginScreen;
