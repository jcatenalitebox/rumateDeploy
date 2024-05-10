import React, { useMemo } from 'react';
import { Box, styled } from '@mui/material';

import { InputEnum, InputType } from '../Register/PersonalData/inputData';
import Input from '../Input/Input';
import RadioButtons from '../RadioButtons/RadioButtons';
import Select from '../Select';

const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

type Props = { baseName: string } & InputType;

const InputComponent = ({ id, label, type, options, baseName }: Props) => {
  const inputComponent = useMemo(() => {
    const name = `${baseName}.${id}`;

    return {
      [InputEnum.TEXT]: <Input name={name} />,
      [InputEnum.DROPDOWN]: options && <Select label={label} name={name} options={options} />,
      [InputEnum.SINGLE_SELECT]: options && <RadioButtons name={name} options={options} />,
    };
  }, [baseName, id, label, options]);

  return (
    <StyledWrapper>
      <h3>{label}</h3>
      {inputComponent[type]}
    </StyledWrapper>
  );
};

export default InputComponent;
