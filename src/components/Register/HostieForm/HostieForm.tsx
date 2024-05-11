import { useSteps } from '@/hooks/useSteps';
import React from 'react';
import { HOSTIE_GENERAL } from './hostieFormData';
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form';
import { Box, Button, Step, StepLabel, Typography, styled } from '@mui/material';
import InputComponent from '@/components/InputComponent';
import { InputEnum } from '../PersonalData/inputData';
import MobileHeader from '@/components/Common/MobileHeader';
import { StyledStepper } from '@/components/Common/StyledStepper/StyledStepper';
import theme from '@/theme';
import StepIconComponent from '@/components/Common/StepIconComponent';
import FooterDrawer from '@/components/FooterDrawer';
import { useUserRole } from '@/hooks/useUserRole';
import { UserRoleEnum } from '@/types';
import { registerUser } from '../../../../lib/firebase/actions';

const StyledInputsWrapper = styled(Box)`
  ${theme.mixins.layout};
  display: flex;
  flex-direction: column;
`;

const StyledStep = styled(Step)`
  ${theme.breakpoints.up('lg')} {
    padding: 0;
  }
`;

const StyledStepTitle = styled(Typography)`
  ${theme.mixins.layout}
  margin-bottom: 20px;
`;

const StyledInputComponent = styled(InputComponent)`
  ${theme.mixins.layout}
`;

const StyledMiddleInputsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledInnerWrapper = styled(Box)`
  ${theme.mixins.layout};
  display: flex;
  gap: 16px;
`;

const StyledBackButton = styled(Button)`
  width: 50%;
`;

const StyledContinueButton = styled(Button)`
  width: 50%;
`;

const formBaseName = 'hostie';

type Props = {
  signUpBaseNameForm: string;
};

const HostieForm = ({ signUpBaseNameForm }: Props) => {
  const { currentStep, prevStep, nextStep } = useSteps();
  const { userRole } = useUserRole();
  const steps =
    userRole === UserRoleEnum.HOSTIE
      ? ['PERSONAL_DATA', 'MORE_INFORMATION', 'HOSTIE_FORM']
      : ['PERSONAL_DATA', 'MORE_INFORMATION'];
  const currentStepIndex = steps.findIndex((step) => step === currentStep) || 0;
  const { setValue } = useFormContext();
  const parentForm = useWatch({ name: signUpBaseNameForm });

  const form = useForm({
    defaultValues: {
      [formBaseName]: {},
    },
  });

  const values = useWatch({ name: formBaseName, control: form.control });

  const handleOnClickNext = () => {
    setValue(`${signUpBaseNameForm}.${currentStep}`, values);
    const valuesMapped = Object.keys(parentForm).reduce((acc, key) => {
      return { ...acc, ...parentForm[key] };
    }, {});
    const removeUndefined = (obj: any) => {
      Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key]);
      return obj;
    };
    const valuesMappedClean = removeUndefined(valuesMapped);
    // console.log('hola', valuesMappedClean)
    registerUser(valuesMappedClean).then(() => {
      nextStep();
    });
    //   .catch((err) => {
    //     console.log('Error registering user', err);
    //   });
  };

  const isValid = form.formState.isValid;

  return (
    <FormProvider {...form}>
      <MobileHeader title={userRole === UserRoleEnum.HOSTIE ? 'Hostie' : 'Rumie'} onClickLeftComponent={prevStep} />
      <StyledStepper activeStep={currentStepIndex}>
        {steps.map((label) => (
          <StyledStep key={label}>
            <StepLabel StepIconComponent={StepIconComponent} />
          </StyledStep>
        ))}
      </StyledStepper>

      <StyledStepTitle variant='h3' fontWeight={600} fontSize={16}>
        Detalle de la vivienda
      </StyledStepTitle>

      <StyledInputsWrapper>
        <StyledInputComponent
          baseName={formBaseName}
          label='Detalle de la vivienda'
          id='propertyType'
          type={InputEnum.DROPDOWN}
          placeholder='Selecciona una opción'
          options={[
            { label: 'Alojamiento entero', id: 'full' },
            { label: 'Habitación privada', id: 'private' },
          ]}
        />
        <h2>Caracteristicas generales</h2>
        <StyledMiddleInputsWrapper>
          {HOSTIE_GENERAL.map((input) => {
            return <InputComponent key={input.id} baseName={formBaseName} {...input} />;
          })}
        </StyledMiddleInputsWrapper>
        <h2>Servicios</h2>

        <InputComponent
          baseName={formBaseName}
          label='Servicios'
          id='services'
          type={InputEnum.MULTI_SELECT}
          placeholder='Selecciona una opción'
          options={[
            { label: 'Wifi', id: 'wifi' },
            { label: 'Aire acondicionado', id: 'airConditioning' },
          ]}
        />

        <h2>Amenities</h2>

        <InputComponent
          baseName={formBaseName}
          label='Amenities'
          id='amenities'
          type={InputEnum.MULTI_SELECT}
          placeholder='Selecciona una opción'
          options={[
            { label: 'Pileta', id: 'pool' },
            { label: 'Gimnasio', id: 'gym' },
            { label: 'Sum', id: 'sum' },
          ]}
        />
      </StyledInputsWrapper>

      <FooterDrawer>
        <StyledInnerWrapper>
          <StyledBackButton color='primary' variant='outlined' onClick={prevStep}>
            Atrás
          </StyledBackButton>
          <StyledContinueButton disabled={!isValid} color='primary' variant='contained' onClick={handleOnClickNext}>
            Siguiente
          </StyledContinueButton>
        </StyledInnerWrapper>
      </FooterDrawer>
    </FormProvider>
  );
};

export default HostieForm;
