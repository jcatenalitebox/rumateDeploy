import { useSteps } from '@/hooks/useSteps';
import React from 'react';
import { HOSTIE_GENERAL } from './hostieFormData';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Button, styled } from '@mui/material';
import InputComponent from '@/components/InputComponent';
import { InputEnum } from '../PersonalData/inputData';

const StyledInputWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const formBaseName = 'hostie';

const HostieForm = () => {
  const { currentStep, nextStep } = useSteps();

  const form = useForm({
    defaultValues: {
      [formBaseName]: {},
    },
  });

  const isValid = form.formState.isValid;

  return (
    <FormProvider {...form}>
      <div>{currentStep}</div>
      <h3>Detalle de la vivienda</h3>
      <InputComponent
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
      <StyledInputWrapper>
        {HOSTIE_GENERAL.map((input) => {
          return <InputComponent key={input.id} baseName={formBaseName} {...input} />;
        })}
      </StyledInputWrapper>
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

      <Button disabled={!isValid} color='primary' variant='contained' onClick={nextStep}>
        Next Step
      </Button>
    </FormProvider>
  );
};

export default HostieForm;
