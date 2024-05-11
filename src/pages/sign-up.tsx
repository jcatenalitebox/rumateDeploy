import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { StepsProvider, useSteps } from '@/hooks/useSteps';
import PersonalData from '@/components/Register/PersonalData';
import MoreInformation from '@/components/Register/MoreInformation';
import UserRole from '@/components/Register/UserRole';

enum SignUpStepsEnum {
  USER_ROLE = 'USER_ROLE',
  PERSONAL_DATA = 'PERSONAL_DATA',
  MORE_INFORMATION = 'MORE_INFORMATION',
}

type SignUpSteps = SignUpStepsEnum[];

export const SIGN_UP_STEPS: SignUpSteps = [...Object.values(SignUpStepsEnum)];

const StepComponents: { [k in SignUpStepsEnum]: React.ComponentType<StepHandlerProps> } = {
  [SignUpStepsEnum.USER_ROLE]: () => <UserRole />,
  [SignUpStepsEnum.PERSONAL_DATA]: () => <PersonalData />,
  [SignUpStepsEnum.MORE_INFORMATION]: () => <MoreInformation />,
};

type StepHandlerProps = {
  formBaseName: string;
};

const StepHandler = ({ formBaseName }: StepHandlerProps) => {
  const { currentStep } = useSteps();
  const StepComponent = StepComponents[currentStep as SignUpStepsEnum];

  return currentStep ? <StepComponent formBaseName={formBaseName} /> : null;
};

const SignUpPage = () => {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <StepsProvider initialStep={0} steps={SIGN_UP_STEPS}>
        <StepHandler formBaseName='signUp' />
      </StepsProvider>
    </FormProvider>
  );
};

export default SignUpPage;
