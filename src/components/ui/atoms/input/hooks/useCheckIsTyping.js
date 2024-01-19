import { useState } from 'react';

const useCheckIsTyping = () => {
  const [isTyping, setIsTyping] = useState();

  const startTyping = () => {
    setIsTyping(true);
  };

  const stopTyping = () => {
    setIsTyping(false);
  };

  return { isTyping, startTyping, stopTyping };
};

export { useCheckIsTyping };
