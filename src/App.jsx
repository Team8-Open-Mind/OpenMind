import { RouterProvider } from 'react-router-dom';

import { router } from '@routes/Router';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './style/global/GlobalStyle';
import { foundation } from './style/theme/theme';

function App() {
  return (
    <ThemeProvider theme={foundation}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
