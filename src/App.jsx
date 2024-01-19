import { ThemeProvider } from 'styled-components';

import InputField from '@components/ui/atoms/input/input-field/InputField';
import InputTextArea from '@components/ui/atoms/input/input-text-area/InputTextArea';

import GlobalStyle from './style/global/GlobalStyle';
import { foundation } from './style/theme/theme';

function App() {
  return (
    <ThemeProvider theme={foundation}>
      <GlobalStyle />
      <InputField />
      <InputTextArea />
    </ThemeProvider>
  );
}

export default App;
