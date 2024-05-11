import { FormControlLabel, styled, useRadioGroup } from '@mui/material';
import Radio from '@mui/material/Radio';

const StyledFormControlLabel = styled(FormControlLabel)<{ $checked?: boolean }>`
  ${(props) =>
    props.$checked &&
    `
      & .MuiTypography-root {
        font-weight: 500;
      }
  `}
`;

type Props = {
  label?: string | JSX.Element;
  value: string | number;
  size?: 'small' | 'medium' | undefined;
  disabled?: boolean;
  handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
  boldLabelOnCheck?: boolean;
  className?: string;
};

const RadioButton = ({ label, size, disabled, value, handleClick, boldLabelOnCheck, className }: Props) => {
  const radioGroup = useRadioGroup();

  return (
    <StyledFormControlLabel
      $checked={boldLabelOnCheck && radioGroup?.value === value}
      className={className}
      control={<Radio size={size} value={value || 'defaultValue'} onClick={(e) => handleClick && handleClick(e)} />}
      disabled={disabled}
      label={label}
      value={value}
    />
  );
};

export default RadioButton;
