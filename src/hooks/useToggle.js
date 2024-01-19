import { useReducer } from 'react';

const useToggle = (initial = false) => {
  const [state, toggleState] = useReducer((prev) => !prev, initial, Boolean);

  return [state, toggleState];
};

export { useToggle };
