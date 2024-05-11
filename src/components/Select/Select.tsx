import { transientOptions } from '@/utils/transientOptions';
import { styled, Select as MUISelect, MenuItem, SelectChangeEvent, InputLabel, FormControl } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const StyledInputLabel = styled(InputLabel)``;

const StyledDropdown = styled(MUISelect, transientOptions)<{ $isHalfWidth?: boolean }>`
  width: ${({ $isHalfWidth }) => ($isHalfWidth ? '50%' : '100%')};

  .MuiSelect-select {
    align-items: center;
  }
`;

type Props = {
  className?: string;
  label: string;
  name: string;
  options: { id: string; label: string }[];
  isHalfWidth?: boolean;
};

const Select = ({ className, label, options, name, isHalfWidth }: Props) => {
  const { setValue } = useFormContext();

  const handleDropdown = (event: SelectChangeEvent<unknown>) => {
    setValue(name, event.target.value as string, { shouldValidate: true });
  };

  return (
    <FormControl>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledDropdown
        className={className}
        onChange={handleDropdown}
        size='small'
        $isHalfWidth={isHalfWidth}
        label={label}
        // input={<OutlinedInput label={label} name={name} id={name} />}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </StyledDropdown>
    </FormControl>
  );
};

export default Select;
