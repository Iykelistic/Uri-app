import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { Box, Button } from '@mui/material';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useMemo, useState } from 'react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState(false);
  const theme = useMemo(() => createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
    },
  }), [dark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Box
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            zIndex: 1300,
            '@media (max-width: 600px)': {
              top: 'auto',
              bottom: 16,
            },
          }}
        >
          <Button
            variant="contained"
            size="small"
            onClick={() => setDark(!dark)}
            sx={{ borderRadius: '999px' }}
          >
            {dark ? <FaSun style={{color:"orange"}}/> : <FaMoon style={{color:"orange"}}/>}
          </Button>
        </Box>

        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
