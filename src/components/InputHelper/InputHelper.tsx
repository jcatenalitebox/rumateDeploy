import { FormHelperText, styled } from '@mui/material';
import { useMemo } from 'react';
import { transientOptions } from '@/utils/transientOptions';
import theme from '@/theme';
import RequiredLabel from './RequiredLabel';

type Props = {
  error?: string | React.ReactNode;
  isRequired?: boolean;
  helperText?: string;
  addMargin?: boolean;
  isUnavailable?: boolean;
  className?: string;
};

const StyledFormHelperText = styled(FormHelperText, transientOptions)<{
  $addMargin?: boolean;
  $isUnavailable?: boolean;
}>`
  word-wrap: break-word;
  margin-left: ${(props) => (props.$addMargin ? '14px' : '0')};
  &.MuiFormHelperText-root {
    color: ${(props) => (props.$isUnavailable ? theme.palette.error.main : '')};
  }
`;

const InputHelper = ({ error, isRequired, helperText, addMargin, className, isUnavailable }: Props) => {
  const hasNoContent = useMemo(() => !error && !isRequired && !helperText, [error, isRequired, helperText]);

  if (hasNoContent) return null;
  return (
    <StyledFormHelperText
      error={!!error}
      $addMargin={addMargin}
      $isUnavailable={isUnavailable}
      className={className}
      as='span'>
      {error || (isRequired && <RequiredLabel />) || helperText}
    </StyledFormHelperText>
  );
};

export default InputHelper;
