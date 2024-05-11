import theme from '@/theme';
import { Stepper, styled } from '@mui/material';

export const StyledStepper = styled(Stepper)`
  margin-bottom: 8px;
  margin-top: 8px;
  max-height: 20px;
  height: 100%;
  box-sizing: border-box;

  .MuiStepLabel-iconContainer {
    padding-right: 0px;
  }

  ${theme.breakpoints.up('lg')} {
    margin-top: 0;
  }

  .Mui-completed {
    .MuiStepConnector-lineHorizontal {
      border-color: ${theme.palette.primary.main} !important;
    }
  }

  .MuiStepConnector-root {
    .MuiStepConnector-line {
      border-width: 2px;
    }
  }

  .MuiStepConnector-root.Mui-active {
    .MuiStepConnector-line {
      border-color: ${theme.palette.primary.main} !important;
    }
  }
`;
