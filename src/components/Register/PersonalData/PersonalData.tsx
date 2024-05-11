import { Box, Button, Step, StepLabel, Typography, styled } from '@mui/material';
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form';
import { useSteps } from '@/hooks/useSteps';
import InputComponent from '@/components/InputComponent';
import { yupResolver } from '@hookform/resolvers/yup';
import { PERSONAL_DATA_INPUTS } from './inputData';
import personalDataSchema from './personalDataSchema';
import MobileHeader from '@/components/Common/MobileHeader';
import FooterDrawer from '@/components/FooterDrawer';
import theme from '@/theme';
import { StyledStepper } from '@/components/Common/StyledStepper/StyledStepper';
import StepIconComponent from '@/components/Common/StepIconComponent';
import { useUserRole } from '@/hooks/useUserRole';
import { UserRoleEnum } from '@/types';

export type PersonalData = {
  personalData: {
    email: string;
    password: string;
    // repeatPassword: string;
    birthDate: string;
    state: string;
    city: string;
    // cp: string;
    // phone: string;
    // nationality: string;
    // language: string;
    genre: string;
    // ocupation: string;
    // detail: string;
    // kids: string;
  };
};

const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
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

const StyledInnerWrapper = styled(Box)`
  ${theme.mixins.layout};
`;

const StyledContinueButton = styled(Button)`
  width: 100%;
`;

const StyledStep = styled(Step)`
  ${theme.breakpoints.up('lg')} {
    padding: 0;
  }
`;

const formBaseName = 'personalData';

type Props = {
  signUpBaseNameForm: string;
};

const PersonalData = ({ signUpBaseNameForm }: Props) => {
  const { nextStep, prevStep, currentStep } = useSteps();
  const { setValue } = useFormContext();

  const defaultValues = PERSONAL_DATA_INPUTS.reduce((acc, input) => {
    return { ...acc, [input.id]: input.defaultValue };
  }, {});

  const { userRole } = useUserRole();
  const steps =
    userRole === UserRoleEnum.HOSTIE
      ? ['PERSONAL_DATA', 'MORE_INFORMATION', 'HOSTIE_FORM']
      : ['PERSONAL_DATA', 'MORE_INFORMATION'];

  const form = useForm<PersonalData>({
    resolver: yupResolver(personalDataSchema),
    defaultValues: {
      [formBaseName]: defaultValues,
    },
  });

  const formValues = useWatch({ name: formBaseName, control: form.control });

  const handleOnClickNext = () => {
    nextStep();
    setValue(`${signUpBaseNameForm}.${currentStep}`, formValues);
  };

  const isValid = form.formState.isValid;
  // form.formState.isValid;
  const currentStepIndex = steps.findIndex((step) => step === currentStep) || 0;

  return (
    <FormProvider {...form}>
      <StyledWrapper>
        <MobileHeader title={userRole === UserRoleEnum.HOSTIE ? 'Hostie' : 'Rumie'} onClickLeftComponent={prevStep} />
        <StyledStepper activeStep={currentStepIndex}>
          {steps.map((label) => (
            <StyledStep key={label}>
              <StepLabel StepIconComponent={StepIconComponent} />
            </StyledStep>
          ))}
        </StyledStepper>

        <StyledStepTitle variant='h3' fontWeight={600} fontSize={16}>
          Datos personales
        </StyledStepTitle>
        <StyledInputsWrapper>
          {PERSONAL_DATA_INPUTS.map((input) => {
            return <InputComponent key={input.id} baseName={formBaseName} {...input} />;
          })}
        </StyledInputsWrapper>
        <FooterDrawer>
          <StyledInnerWrapper>
            <StyledContinueButton disabled={!isValid} color='primary' variant='contained' onClick={handleOnClickNext}>
              Siguiente
            </StyledContinueButton>
          </StyledInnerWrapper>
        </FooterDrawer>
      </StyledWrapper>
    </FormProvider>
  );
};

export default PersonalData;
