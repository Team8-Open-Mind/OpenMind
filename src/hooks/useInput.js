import { useState } from 'react';

export const useInput = (initial = '') => {
  const [input, setInput] = useState(initial);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      if (typeof initial !== 'object' || initial === '') return value;

      // case 1. initial이 object였던 경우 && 이전 값이 object인 경우(null 포함).
      // case 2. clearInput으로 초기화 후 prev가 null 일 경우(null에 spread 써도 에러 안 뜸)
      if (typeof prev === 'object') {
        return { ...prev, [name]: value };
      }

      return value;
    });
  };

  const clearInput = () => {
    setInput('');
  };

  return [input, onChange, clearInput];
};
