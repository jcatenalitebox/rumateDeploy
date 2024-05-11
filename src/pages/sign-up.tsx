import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { StepsProvider, useSteps } from '@/hooks/useSteps';
import PersonalData from '@/components/Register/PersonalData';
import MoreInformation from '@/components/Register/MoreInformation';
import UserRole from '@/components/Register/UserRole';
import HostieForm from '@/components/Register/HostieForm';
import { useUserRole } from '@/hooks/useUserRole';
import { UserRoleEnum } from '@/types';
import CompletedScreen from '@/components/Register/CompletedScreen';

enum SignUpStepsEnum {
  USER_ROLE = 'USER_ROLE',
  PERSONAL_DATA = 'PERSONAL_DATA',
  MORE_INFORMATION = 'MORE_INFORMATION',
  HOSTIE_FORM = 'HOSTIE_FORM',
  SUCCES_STEP = 'SUCCES_STEP',
}

type SignUpSteps = SignUpStepsEnum[];

export const SIGN_UP_STEPS: SignUpSteps = [...Object.values(SignUpStepsEnum)];

const getStepComponents = (
  signUpBaseNameForm: string,
  userRole?: UserRoleEnum,
): { [k in SignUpStepsEnum]: React.ComponentType<StepHandlerProps> } => ({
  [SignUpStepsEnum.USER_ROLE]: () => <UserRole signUpBaseNameForm={signUpBaseNameForm} />,
  [SignUpStepsEnum.PERSONAL_DATA]: () => <PersonalData signUpBaseNameForm={signUpBaseNameForm} />,
  [SignUpStepsEnum.MORE_INFORMATION]: () => <MoreInformation signUpBaseNameForm={signUpBaseNameForm} />,
  [SignUpStepsEnum.HOSTIE_FORM]: () =>
    userRole === UserRoleEnum.HOSTIE && <HostieForm signUpBaseNameForm={signUpBaseNameForm} />,
  [SignUpStepsEnum.SUCCES_STEP]: () => <CompletedScreen />,
});

type StepHandlerProps = {
  signUpBaseNameForm: string;
};

const StepHandler = ({ signUpBaseNameForm }: StepHandlerProps) => {
  const { currentStep } = useSteps();
  const { userRole } = useUserRole();

  const StepComponent = getStepComponents(signUpBaseNameForm, userRole)[currentStep as SignUpStepsEnum];

  return currentStep ? <StepComponent signUpBaseNameForm={signUpBaseNameForm} /> : null;
};

const signUpBaseNameForm = 'signUpData';

const SignUpPage = () => {
  const form = useForm({
    defaultValues: {
      [signUpBaseNameForm]: {},
    },
  });

  return (
    <FormProvider {...form}>
      <StepsProvider initialStep={0} steps={SIGN_UP_STEPS}>
        <StepHandler signUpBaseNameForm={signUpBaseNameForm} />
      </StepsProvider>
    </FormProvider>
  );
};

export default SignUpPage;
