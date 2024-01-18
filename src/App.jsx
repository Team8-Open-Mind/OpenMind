import { ThemeProvider } from 'styled-components';

import TestComponent from '@components/ui/atoms/TestComponent';

import GlobalStyle from './style/global/GlobalStyle';
import { foundation } from './style/theme/theme';

function App() {
  return (
    <ThemeProvider theme={foundation}>
      <GlobalStyle />
      <TestComponent />
    </ThemeProvider>
  );
}

export default App;
