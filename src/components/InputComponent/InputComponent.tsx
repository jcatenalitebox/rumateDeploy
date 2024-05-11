import React, { useMemo } from 'react';
import { Box, styled } from '@mui/material';

import { InputEnum, InputType } from '../Register/PersonalData/inputData';
import Input from '../Input/Input';
import Select from '../Select';
import MultipleSelector from '../MultipleSelector';
import { useWatch } from 'react-hook-form';

const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

type Props = { baseName: string } & InputType;

const InputComponent = ({ id, label, type, options, baseName, dependency, dependencyValue }: Props) => {
  const name = `${baseName}.${id}`;

  const value = useWatch({ name });

  const inputComponent = useMemo(() => {
    return {
      [InputEnum.TEXT]: <Input name={name} />,
      [InputEnum.NUMBER]: <Input name={name} type='number' />,
      [InputEnum.DROPDOWN]: options && <Select label={label} name={name} options={options} />,
      [InputEnum.MULTI_SELECT]: options && <MultipleSelector name={name} options={options} />,
    };
  }, [label, name, options]);

  return (
    <StyledWrapper>
      <h3>{label}</h3>
      {inputComponent[type]}
      {dependency && value === dependencyValue && <InputComponent {...dependency} baseName={baseName} />}
    </StyledWrapper>
  );
};

export default InputComponent;
