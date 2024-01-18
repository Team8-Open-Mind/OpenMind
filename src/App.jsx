import { ThemeProvider } from 'styled-components';

import TestComponent from '@components/ui/atoms/TestComponent';

import GlobalStyle from './style/global/GlobalStyle';
import { foundation } from './style/theme/theme';

function App() {
  return (
    <ThemeProvider theme={foundation}>
      <GlobalStyle />
      <p>test</p>
      <p>test 거절이요</p>
      <p>여기다 뭔가 더 해야지 ㅎㅎㅎ</p>
      <TestComponent />
    </ThemeProvider>
  );
}

export default App;
