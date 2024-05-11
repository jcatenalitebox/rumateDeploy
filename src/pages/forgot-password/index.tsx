import MobileHeader from '@/components/Common/MobileHeader';
import theme from '@/theme';
import { Box, Button, TextField, Typography, styled } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const StyledWrapper = styled(Box)`
  ${theme.mixins.layout};
  margin-top: 16px;
`;

const StyledBottomWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

const StyledPasswordsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledInput = styled(TextField)`
  width: 100%;
`;

const StyledButton = styled(Button)``;

function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);

  const handleSteps = () => {
    step === 1 ? setStep(2) : router.push('/');
  };

  return (
    <>
      <MobileHeader title='Cambiar Contraseña' />
      <StyledWrapper>
        <Typography variant='subtitle1' lineHeight='20px'>
          Ingresá el correo electrónico con el que te registraste y nosotros te enviaremos un link para cambiar tu
          contraseña:
        </Typography>
        <StyledBottomWrapper>
          {step === 1 ? (
            <StyledInput label='Correo Electrónico' size='small' />
          ) : (
            <StyledPasswordsWrapper>
              <StyledInput type='password' label='Contraseña' size='small' />
              <StyledInput type='password' label='Repita la contraseña' size='small' />
            </StyledPasswordsWrapper>
          )}
          {/* TODO add disabled state if no value on the input */}
          <StyledButton onClick={handleSteps} variant='contained'>
            {step === 1 ? 'Enviar Link' : 'Actualizar'}
          </StyledButton>
        </StyledBottomWrapper>
      </StyledWrapper>
    </>
  );
}

export default ForgotPasswordPage;
