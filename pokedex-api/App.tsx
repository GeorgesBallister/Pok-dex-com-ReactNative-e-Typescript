import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Welcome } from './src/Pages/Welcome';
import { Home } from './src/Pages/Home';

export default function App() {
  return (
   <ThemeProvider theme={theme}>
    <Welcome />

    <Home />
   </ThemeProvider>
  );
}

