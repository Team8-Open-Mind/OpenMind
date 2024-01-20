import { ThemeProvider } from 'styled-components';

import FloatingDeleteButton from '@components/ui/atoms/Button/floating-button/floating-delete-button/FloatingDeleteButton';
import FloatingWriteQuestionButton from '@components/ui/atoms/Button/floating-button/floating-write-question-button/FloatingWriteQuestionButton';
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
      <FloatingDeleteButton />
      <FloatingWriteQuestionButton />
    </ThemeProvider>
  );
}

export default App;
