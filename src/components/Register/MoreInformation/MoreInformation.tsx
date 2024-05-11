import { Box, Button, Divider, FormControlLabel, Step, StepLabel, Switch, Typography, styled } from '@mui/material';
import React, { useState } from 'react';

import { useSteps } from '@/hooks/useSteps';
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form';
import MobileHeader from '@/components/Common/MobileHeader';
import { StyledStepper } from '@/components/Common/StyledStepper/StyledStepper';
import theme from '@/theme';
// import { MORE_INFORMATION_INPUTS } from '../PersonalData/inputData';
import StepIconComponent from '@/components/Common/StepIconComponent';
import InputComponent from '@/components/InputComponent';
import FooterDrawer from '@/components/FooterDrawer';
import { MORE_INFORMATION_INPUTS, MORE_INFORMATION_INPUTS_EXTRA } from './moreInfoDataInput';
import { useUserRole } from '@/hooks/useUserRole';
import { UserRoleEnum } from '@/types';

const formBaseName = 'moreInformation';

const StyledStep = styled(Step)`
  ${theme.breakpoints.up('lg')} {
    padding: 0;
  }
`;

const StyledStepTitle = styled(Typography)`
  ${theme.mixins.layout}
`;

const StyledInputsWrapper = styled(Box)`
  ${theme.mixins.layout};
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
`;

const StyledDivider = styled(Divider)`
  margin: 24px 0;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
`;

const StyledSwitch = styled(Switch)`
  margin-left: 120px;
`;

const StyledExtraQuestionsWrapper = styled(Box)`
  ${theme.mixins.layout};

  label {
    margin: 0;
    min-width: max-content;
  }
`;

const StyledDescription = styled(Typography)`
  ${theme.mixins.layout};
  margin-top: 16px;
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

type Props = {
  signUpBaseNameForm: string;
};

const MoreInformation = ({ signUpBaseNameForm }: Props) => {
  const { currentStep, nextStep, prevStep } = useSteps();
  const [showMore, setShowMore] = useState<boolean>(false);
  const { setValue } = useFormContext();
  const parentForm = useWatch({ name: signUpBaseNameForm });

  const defaultValues = MORE_INFORMATION_INPUTS.reduce((acc, input) => {
    return { ...acc, [input.id]: input.defaultValue };
  }, {});

  const form = useForm({
    defaultValues: {
      [formBaseName]: defaultValues,
    },
  });

  const { userRole } = useUserRole();

  const values = useWatch({ name: formBaseName, control: form.control });

  const isRumie = userRole === UserRoleEnum.RUMIE;

  const handleOnClickNext = () => {
    setValue(`${signUpBaseNameForm}.${currentStep}`, values);
    if (isRumie) {
      const valuesMapped = Object.keys(parentForm).reduce((acc, key) => {
        return { ...acc, ...parentForm[key] };
      }, {});
      console.log('send form', valuesMapped);
    } else {
      nextStep();
    }
  };

  const steps =
    userRole === UserRoleEnum.HOSTIE
      ? ['PERSONAL_DATA', 'MORE_INFORMATION', 'HOSTIE_FORM']
      : ['PERSONAL_DATA', 'MORE_INFORMATION'];
  const currentStepIndex = steps.findIndex((step) => step === currentStep) || 0;

  const isValid = true;

  return (
    <FormProvider {...form}>
      <MobileHeader title='Hostie' onClickLeftComponent={prevStep} />
      <StyledStepper activeStep={currentStepIndex}>
        {steps.map((label) => (
          <StyledStep key={label}>
            <StepLabel StepIconComponent={StepIconComponent} />
          </StyledStep>
        ))}
      </StyledStepper>

      <StyledStepTitle variant='h3' fontWeight={600} fontSize={16}>
        Preferencias
      </StyledStepTitle>
      <StyledInputsWrapper>
        {MORE_INFORMATION_INPUTS.map((input) => {
          return <InputComponent key={input.id} baseName={formBaseName} {...input} />;
        })}
      </StyledInputsWrapper>
      <StyledExtraQuestionsWrapper>
        <StyledDivider />
        <StyledFormControlLabel
          value='activateExtraQuestions'
          control={<StyledSwitch color='primary' onChange={() => setShowMore(!showMore)} />}
          label='Activar preguntas opcionales'
          labelPlacement='start'
        />
        <StyledDescription variant='h4' fontWeight={400}>
          Tené en cuenta que cuantás más preguntas respondas, mayor va a ser la posibilidad de encontrar a tu RuMate
          perfecto.
        </StyledDescription>
      </StyledExtraQuestionsWrapper>
      {showMore && (
        <StyledInputsWrapper>
          {MORE_INFORMATION_INPUTS_EXTRA.map((input) => {
            return <InputComponent key={input.id} baseName={formBaseName} {...input} />;
          })}
        </StyledInputsWrapper>
      )}

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

export default MoreInformation;
