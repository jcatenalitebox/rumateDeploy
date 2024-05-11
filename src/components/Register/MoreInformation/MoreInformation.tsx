import { Box, Button, styled } from '@mui/material';
import React, { useState } from 'react';

import { useSteps } from '@/hooks/useSteps';
import { FormProvider, useForm } from 'react-hook-form';
import { MORE_INFORMATION_INPUTS, MORE_INFORMATION_INPUTS_EXTRA } from './moreInfoDataInput';
import InputComponent from '@/components/InputComponent';

const StyledInputWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const formBaseName = 'moreInformation';

const MoreInformation = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { currentStep, nextStep } = useSteps();
  const defaultValues = MORE_INFORMATION_INPUTS.reduce((acc, input) => {
    return { ...acc, [input.id]: input.defaultValue };
  }, {});

  const form = useForm({
    defaultValues: {
      [formBaseName]: defaultValues,
    },
  });

  return (
    <FormProvider {...form}>
      <div>{currentStep}</div>
      <StyledInputWrapper>
        {MORE_INFORMATION_INPUTS.map((input) => {
          return <InputComponent key={input.id} baseName={formBaseName} {...input} />;
        })}
      </StyledInputWrapper>
      {showMore ? (
        <StyledInputWrapper>
          {MORE_INFORMATION_INPUTS_EXTRA.map((input) => {
            return <InputComponent key={input.id} baseName={formBaseName} {...input} />;
          })}
        </StyledInputWrapper>
      ) : (
        <Button variant='text' onClick={() => setShowMore(true)}>
          Mas preguntas...
        </Button>
      )}

      <Button color='primary' variant='contained' onClick={nextStep}>
        Next Step
      </Button>
    </FormProvider>
  );
};

export default MoreInformation;
