import { ThemeProvider } from 'styled-components';

import TestComponent from '@components/ui/atoms/TestComponent';

import GlobalStyle from './style/GlobalStyle';
import { palettes } from './style/theme';

function App() {
  return (
    <ThemeProvider theme={palettes}>
      <GlobalStyle />
      <TestComponent />
    </ThemeProvider>
  );
}

export default App;
