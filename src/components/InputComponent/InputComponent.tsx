import React, { useMemo } from 'react';
import { Box, InputAdornment, styled } from '@mui/material';

import { InputEnum, InputType } from '../Register/PersonalData/inputData';
import Input from '../Input/Input';
import Select from '../Select';
import MultipleSelector from '../MultipleSelector';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useWatch } from 'react-hook-form';

const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const StyledVisibilityOutlinedIcon = styled(VisibilityOutlinedIcon)`
  cursor: pointer;
`;

type Props = { baseName: string; isHalfWidth?: boolean } & InputType;

const InputComponent = ({ id, label, type, options, baseName, isHalfWidth, dependency, dependencyValue }: Props) => {
  const name = `${baseName}.${id}`;
  const value = useWatch({ name });

  const inputComponent = useMemo(() => {
    return {
      [InputEnum.TEXT]: (
        <Input
          label={label}
          name={name}
          isHalfWidth={isHalfWidth}
          type={id === 'password' ? 'password' : 'text'}
          InputProps={{
            endAdornment:
              id === 'password' ? (
                <InputAdornment position='end'>
                  <StyledVisibilityOutlinedIcon />
                </InputAdornment>
              ) : null,
          }}
        />
      ),
      [InputEnum.NUMBER]: <Input label={label} name={name} type='number' isHalfWidth={isHalfWidth} />,
      [InputEnum.DROPDOWN]: options && <Select label={label} name={name} options={options} isHalfWidth={isHalfWidth} />,
      [InputEnum.MULTI_SELECT]: options && <MultipleSelector name={name} options={options} />,
      [InputEnum.DATE]: <Input name={name} type='date' isHalfWidth={isHalfWidth} />,
      [InputEnum.FILE]: <Input name={name} type='file' />,
    };
  }, [id, isHalfWidth, label, name, options]);

  const inputComponentType = inputComponent[type] || null;

  return (
    <StyledWrapper>
      {inputComponentType}
      {dependency && value === dependencyValue && <InputComponent {...dependency} baseName={baseName} />}
    </StyledWrapper>
  );
};

export default InputComponent;
