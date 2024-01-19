import { ThemeProvider } from 'styled-components';

import Button from '@components/ui/atoms/Button/Button';
import TestComponent from '@components/ui/atoms/TestComponent';

import GlobalStyle from './style/global/GlobalStyle';
import { foundation } from './style/theme/theme';

function App() {
  return (
    <ThemeProvider theme={foundation}>
      <GlobalStyle />
      <TestComponent />
      <Button>버튼 테스트 입니다.</Button>
    </ThemeProvider>
  );
}

export default App;
