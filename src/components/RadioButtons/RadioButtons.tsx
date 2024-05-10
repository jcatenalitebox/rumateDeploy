import { Box, RadioGroup, styled } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

import handleInputRef from '@/utils/handleInputRef';

import RadioButton from '../RadioButton/RadioButton';

const StyledRadioButtonWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type Props = {
  name: string;
  options: { id: string; label: string }[];
};

const RadioButtons = ({ name, options }: Props) => {
  //   const handleTrigger = () => validateFields && trigger(validateFields);

  //   const handleOptionSelected = (option: { onSelected?: () => void }) => {
  //     option.onSelected?.();
  //     handleTrigger();
  //   };

  return (
    <Controller
      defaultValue={null}
      name={name}
      render={({ field }) => (
        <RadioGroup
          {...field}
          ref={(_ref) => handleInputRef(_ref as HTMLElement, field)}
          className='radio-group'
          onChange={(e) => {
            field.onChange(e);
            // const selectedOption = options.find((option) => option.label === e.target.value);

            // if (selectedOption) {
            //   handleOptionSelected(selectedOption);
            // }
          }}>
          {options.map((option) => (
            <StyledRadioButtonWrapper key={option.id} className='radio-button-wrapper'>
              <RadioButton key={`radio-${option.id}`} label={option.label} size='small' value={option.label} />
              {/* {option.rightValue && (
                <StyledRightValueContainer $isSelected={field.value === option.value}>
                  <Typography fontWeight={600} variant='h4'>
                    {option.rightValue}
                  </Typography>
                </StyledRightValueContainer>
              )} */}
            </StyledRadioButtonWrapper>
          ))}
        </RadioGroup>
      )}
    />
  );
};

export default RadioButtons;
