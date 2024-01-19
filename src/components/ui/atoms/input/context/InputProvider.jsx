import { createContext, useContext } from 'react';

const InputContext = createContext();

const InputProvider = ({ children }) => {
  return <InputContext.Provider>{children}</InputContext.Provider>;
};

export default InputProvider;

export const useInputCotext = () => {
  const context = useContext(InputContext);

  if (context === undefined) throw new Error('useInputCotext should be used within InputProvider Component');

  return context;
};
