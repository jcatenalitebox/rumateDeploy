import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from '@/theme';
import { UserRoleProvider } from '@/hooks/useUserRole';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserRoleProvider>
        <Component {...pageProps} />
      </UserRoleProvider>
    </ThemeProvider>
  );
}
