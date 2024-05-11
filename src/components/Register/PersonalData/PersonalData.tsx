import { Box, Button, styled } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useSteps } from '@/hooks/useSteps';
import InputComponent from '@/components/InputComponent';
import { yupResolver } from '@hookform/resolvers/yup';
import { PERSONAL_DATA_INPUTS } from './inputData';
import personalDataSchema from './personalDataSchema';

export type PersonalData = {
  personalData: {
    name: string;
    age: string;
    genre: string;
    ocupation: string;
    kids: string;
    others: string;
  };
};

const StyledInputWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const formBaseName = 'personalData';

const PersonalData = () => {
  const { currentStep, nextStep } = useSteps();
  const defaultValues = PERSONAL_DATA_INPUTS.reduce((acc, input) => {
    return { ...acc, [input.id]: input.defaultValue };
  }, {});

  const form = useForm<PersonalData>({
    resolver: yupResolver(personalDataSchema),
    defaultValues: {
      [formBaseName]: defaultValues,
    },
  });

  const isValid = form.formState.isValid;

  return (
    <FormProvider {...form}>
      <div>{currentStep}</div>
      <StyledInputWrapper>
        {PERSONAL_DATA_INPUTS.map((input) => {
          return <InputComponent key={input.id} baseName={formBaseName} {...input} />;
        })}
      </StyledInputWrapper>
      <Button disabled={!isValid} color='primary' variant='contained' onClick={nextStep}>
        Next Step
      </Button>
    </FormProvider>
  );
};

export default PersonalData;
