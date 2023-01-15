// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SwipeableTemporaryDrawer from '../components/Navbar'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.css'
import Example from '../components/TWexample'

const queryClient = new QueryClient()

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#42f569',
      light: '#0076fb',
    },
    secondary: {
      main: '#a6a7aa',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return(
    <QueryClientProvider client={queryClient}>  
      {/* <ThemeProvider theme={darkTheme}> */}
        {/* <CssBaseline /> */}
        {/* <SwipeableTemporaryDrawer /> */}
        <Example/>
        {/* <Component {...pageProps}/> */}
      {/* </ThemeProvider> */}
    </QueryClientProvider>   
  )
}
