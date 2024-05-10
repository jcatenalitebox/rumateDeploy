import { deepmerge } from '@mui/utils';
import { createTheme } from '@mui/material';

import palette from './utils/palette';
import getMixins from './utils/getMixins';
import MuiTypography from './components/MuiTypography';
import MuiButton from './components/MuiButton';
import MuiDivider from './components/MuiDivider';
import MuiInputAdornment from './components/MuiInputAdornment';
import MuiInputLabel from './components/MuiInputLabel';
import MuiTextField from './components/MuiTextField';
import MuiCheckbox from './components/MuiCheckbox';
import MuiSlider from './components/MuiSlider';
import MuiIconButton from './components/MuiIconButton';
import MuiListItem from './components/MuiListItem';
import MuiListItemIcon from './components/MuiListItemIcon';
import MuiList from './components/MuiList';
import MuiSelect from './components/MuiSelect';

import { Figtree } from 'next/font/google';

export const figtree = Figtree({ preload: true, display: 'block', subsets: ['latin'] });

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1440,
      xl: 2560,
    },
  },
  typography: {
    fontFamily: figtree.style.fontFamily,
  },
  paddings: {
    xs: '16px',
    sm: '32px',
    md: '65px',
    lg: '200px',
  },
  palette,
  components: {
    MuiTypography,
    MuiButton,
    MuiDivider,
    MuiInputAdornment,
    MuiInputLabel,
    MuiTextField,
    MuiCheckbox,
    MuiSlider,
    MuiIconButton,
    MuiListItem,
    MuiListItemIcon,
    MuiList,
    MuiSelect,
  },
  transitions: {
    duration: {
      enteringScreen: 300,
      leavingScreen: 300,
    },
  },
});

export default deepmerge(theme, { mixins: getMixins(theme) });
