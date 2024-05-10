import { Button } from '@mui/material';
import React from 'react';

import { useSteps } from '@/hooks/useSteps';

const MoreInformation = () => {
  const { currentStep, nextStep } = useSteps();

  return (
    <>
      <div>{currentStep}</div>
      <Button color='primary' variant='contained' onClick={nextStep}>
        Next Step
      </Button>
    </>
  );
};

export default MoreInformation;
