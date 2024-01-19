import { useRef } from 'react';

const useAutoResize = () => {
  const textBoxRef = useRef();

  const handleResizeHeight = () => {
    textBoxRef.current.style.height = 'auto';
    textBoxRef.current.style.height = `${textBoxRef.current?.scrollHeight}px`;
  };

  return { textBoxRef, handleResizeHeight };
};

export { useAutoResize };
