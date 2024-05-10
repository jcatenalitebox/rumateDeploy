import { Box, Button, styled } from '@mui/material';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

import { useSteps } from '@/hooks/useSteps';
import InputComponent from '@/components/InputComponent';

import { PERSONAL_DATA_INPUTS } from './inputData';

const StyledInputWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const formBaseName = 'personalData';

const PersonalData = () => {
  const { currentStep, nextStep } = useSteps();

  const form = useForm({
    defaultValues: {
      [formBaseName]: {},
    },
  });

  const values = useWatch({ name: formBaseName, control: form.control });

  console.log('values', values);

  return (
    <FormProvider {...form}>
      <div>{currentStep}</div>
      <StyledInputWrapper>
        {PERSONAL_DATA_INPUTS.map((input) => {
          return <InputComponent key={input.id} baseName={formBaseName} {...input} />;
        })}
      </StyledInputWrapper>
      <Button color='primary' variant='contained' onClick={nextStep}>
        Next Step
      </Button>
    </FormProvider>
  );
};

export default PersonalData;
