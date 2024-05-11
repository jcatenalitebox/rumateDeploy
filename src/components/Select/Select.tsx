import { styled, Select as MUISelect, AccordionDetails, MenuItem, SelectChangeEvent } from '@mui/material';
import { useFormContext } from 'react-hook-form';

type Props = {
  label: string;
  name: string;
  options: { id: string; label: string }[];
};

const StyledAccordionDetails = styled(AccordionDetails)`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledDropdown = styled(MUISelect)`
  width: 100%;
`;

const Select = ({ options, name }: Props) => {
  const { setValue } = useFormContext();

  const handleDropdown = (event: SelectChangeEvent<unknown>) => {
    setValue(name, event.target.value as string, { shouldValidate: true });
  };

  return (
    <StyledAccordionDetails>
      <StyledDropdown onChange={(ds) => handleDropdown(ds)}>
        <MenuItem value='All'>All</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </StyledDropdown>
    </StyledAccordionDetails>
  );
};

export default Select;
