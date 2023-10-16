'use client'
import AppBar from '@mui/material/AppBar';
import { Typography, Toolbar, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky" sx={{ bgcolor: "#0E99FF" }}>
        <Toolbar>
          <Typography sx={{ fontWeight: '500', fontSize: 24 }}>Bizesoft</Typography>
        </Toolbar>
      </AppBar>
      <div className='text-gray-500 font-semibold'>
        <span>Bizesoft</span>
      </div>
    </ThemeProvider>
  )
}
