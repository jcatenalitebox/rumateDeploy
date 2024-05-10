import { Box, styled, Select as MUISelect } from '@mui/material';
import { useFormContext, useWatch } from 'react-hook-form';

type Props = {
  label: string;
  name: string;
  options: { id: string; label: string }[];
};

const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const StyledInnerWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Select = ({ options, name }: Props) => {
  const { setValue } = useFormContext();
  const value = useWatch({ name });

  console.log('value', value);

  return (
    <StyledWrapper>
      <MUISelect label={value} value={value}>
        <StyledInnerWrapper>
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                setValue(name, option.label);
              }}>
              {option.label}
            </button>
          ))}
        </StyledInnerWrapper>
      </MUISelect>
    </StyledWrapper>
  );
};

export default Select;
