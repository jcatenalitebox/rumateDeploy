import theme from '@/theme/theme';
import { styled } from '@mui/material';

const StyledRequiredText = styled('span')`
  color: ${theme.palette.error.main};
`;

const RequiredLabel = () => {
  return (
    <>
      <StyledRequiredText>*</StyledRequiredText>
      Este campo es obligatorio
    </>
  );
};

export default RequiredLabel;
