import { Global, ThemeProvider } from '@emotion/react';
import Router from './routes/Router';
import reset from './styles/reset';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <Router />
    </ThemeProvider>
  );
};
export default App;
