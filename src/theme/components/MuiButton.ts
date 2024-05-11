import { Components, Theme } from '@mui/material';

const MuiButton: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  styleOverrides: {
    containedPrimary: (props) => ({
      color: `${props.theme.palette.customColors.white}`,
      backgroundColor: `${props.theme.palette.customButtons.primary.main}`,
      [props.theme.breakpoints.up('sm')]: {
        ':hover': {
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
          backgroundColor: `${props.theme.palette.customButtons.primary.backgroundHover}`,
        },
        ':active': {
          backgroundColor: `${props.theme.palette.customButtons.primary.backgroundFocus}`,
        },
      },
    }),
    containedError: (props) => ({
      [props.theme.breakpoints.up('sm')]: {
        color: `${props.theme.palette.customColors.white}`,
        ':hover': {
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
          backgroundColor: `${props.theme.palette.error.dark}`,
        },
      },
    }),
    text: {
      padding: '10px 16px',
    },
    endIcon: {
      paddingRight: '10px 19px 10px 24px',
    },
    root: (props) => ({
      borderRadius: '4px',
      boxShadow: 'none',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: props.ownerState.startIcon ? '20px' : '24px',
      paddingRight: props.ownerState.endIcon ? '20px' : '24px',
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '20px',
      maxHeight: '40px',
      [props.theme.breakpoints.up('sm')]: {
        ':hover': {
          backgroundColor: `${props.theme.palette.customButtons.secondary.backgroundHover}`,
        },
      },
    }),
  },
};

export default MuiButton;
