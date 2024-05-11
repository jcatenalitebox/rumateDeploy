import LoginMisc from '@/assets/login-misc';
import theme from '@/theme';
import { Box, Button, InputAdornment, TextField, Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { AuthContext } from '@/context/AuthContext';
import { getUserByEmail, signIn } from '../../../lib/firebase/actions';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { UserRoleEnum } from '@/types';

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
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const router = useRouter();

  const { dispatch } = useContext<any>(AuthContext);

  const handleLogin = () => {
    signIn(email, password, dispatch).then((res) => {
      if (res.success) {
        toast.success(res.message || 'Success');
        getUserByEmail(email).then((res) => {
          if (res.data === UserRoleEnum.RUMIE) return router.push('/rumie');
          return router.push('/hostie');
        });
      } else {
        toast.error(res.message || 'Error');
      }
    });
  };

  return (
    <StyledWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Toaster />
      <StyledTopMisc>
        <LoginMisc />
      </StyledTopMisc>
      <StyledSubWrapper>
        <StyledTitle variant='h2'>Hola!</StyledTitle>
        <StyledInputsWrapper>
          <StyledInput
            label='Correo Electrónico'
            size='small'
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
        <StyledConfirmButton variant='contained' onClick={handleLogin}>
          Iniciar Sesión
        </StyledConfirmButton>
        <StyledSignUpWrapper>
          <Typography variant='subtitle1' lineHeight='20px'>
            ¿No tenes cuenta?
          </Typography>
          <StyledLink href='/sign-up'>
            <StyledSignUpText variant='h4'>Registrate</StyledSignUpText>
          </StyledLink>
        </StyledSignUpWrapper>
      </StyledSubWrapper>
    </StyledWrapper>
  );
};

export default LoginScreen;
