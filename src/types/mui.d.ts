import { Breakpoint } from '@mui/material';
import { MixinsOptions } from '@mui/material/styles/createMixins';
import '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  export interface Palette {
    primary: {
      main: string;
      hover: string;
      focus: string;
      backgroundSecondaryHover: string;
      backgroundSecondaryFocus: string;
    };
    secondary: {
      backgroundHover: string;
      backgroundFocus: string;
    };
    customText: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    error: {
      main: string;
      backgroundHover: string;
      backgroundFocus: string;
      secondaryHover: string;
      secondaryFocus: string;
    };
    success: {
      main: string;
    };
    customButtons: {
      primary: {
        main: string;
        backgroundHover: string;
        backgroundFocus: string;
      };
      secondary: {
        backgroundHover: string;
        backgroundFocus: string;
      };
      disabled: {
        textDisabled: string;
        backgroundDisabled: string;
      };
    };
    customInput: {
      border: string;
      borderFilled: string;
    };
    customColors: {
      yellow: string;
      skiBlue: string;
      blue: string;
      white: string;
      gray: string;
      darkGray: string;
      black: string;
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PaletteOptions extends Palette {}

declare module '@mui/material/Typography/typographyClasses' {
  export interface TypographyClasses {
    label: string;
  }
}

declare module '@mui/material/Typography/Typography' {
  export interface TypographyPropsVariantOverrides {
    label: true;
  }
}

declare module '@mui/material/styles/createMixins' {
  export interface MixinsOptions {
    layout: CSSProperties;
    resetButton: CSSProperties;
  }
}

declare module '@mui/material/styles/createTheme' {
  export interface ThemeOptions {
    paddings: {
      [k in Breakpoint]?: string;
    };
  }

  export interface Theme extends ThemeOptions {
    mixins: MixinsOptions;
  }
}
