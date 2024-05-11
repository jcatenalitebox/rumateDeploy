import { ListItem, styled } from '@mui/material';
import { useController, useFieldArray } from 'react-hook-form';

import handleInputRef from '@/utils/handleInputRef';
import Checkbox from '../Checkbox/Checkbox';

const StyledListItem = styled(ListItem)`
  display: flex;
  padding: 4px 0;
  grid-gap: 8px;
  border-radius: 4px;
`;

const StyledCheckbox = styled(Checkbox)`
  width: 100%;
`;

type Props = {
  name: string;
  options: { label: string; id: string }[];
};

const MultipleSelector = ({ name, options }: Props) => {
  const { fields, append, remove } = useFieldArray({ name });
  const { field } = useController({ name });
  const handleChange = (checked: boolean, value: string | number, checkedIndex: number) => {
    if (!checked) append({ value });
    else remove(checkedIndex);
  };

  return (
    <>
      {options.map((option) => {
        const typedFields = fields as unknown as { value: number | string }[];
        const checkedIndex = typedFields.findIndex((_field) => _field.value === option.id);
        const checked = checkedIndex !== -1;

        return (
          <StyledListItem
            key={`checkbox-${option.id}`}
            ref={(_ref) => handleInputRef(_ref as HTMLElement, field)}
            className='option-item'>
            <StyledCheckbox
              label={option.label}
              size='small'
              name={name}
              onChange={() => handleChange(checked, option.id, checkedIndex)}
              checked={checked}
            />
          </StyledListItem>
        );
      })}
    </>
  );
};

export default MultipleSelector;
