import React, { useMemo } from 'react';
import { Box, InputAdornment, styled } from '@mui/material';

import { InputEnum, InputType } from '../Register/PersonalData/inputData';
import Input from '../Input/Input';
import Select from '../Select';
import MultipleSelector from '../MultipleSelector';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const StyledVisibilityOutlinedIcon = styled(VisibilityOutlinedIcon)`
  cursor: pointer;
`;

type Props = { baseName: string; isHalfWidth?: boolean } & InputType;

const InputComponent = ({ id, label, type, options, baseName, isHalfWidth }: Props) => {
  const inputComponent = useMemo(() => {
    const name = `${baseName}.${id}`;
    // TODO showPassword state

    return {
      [InputEnum.TEXT]: (
        <Input
          label={label}
          name={name}
          isHalfWidth={isHalfWidth}
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
    };
  }, [baseName, id, isHalfWidth, label, options]);

  const inputComponentType = inputComponent[type] || null;

  return <StyledWrapper>{inputComponentType}</StyledWrapper>;
};

export default InputComponent;
