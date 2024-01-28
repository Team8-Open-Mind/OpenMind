import { useEffect, useRef } from 'react';

/**
 * @typedef {Object} useTitleOptions
 * @property {boolean} [restoreOnUnmount]
 *
 * @param {string} title
 * @param {useTitleOptions} [options]
 */
const useDocumentTitle = (title, options) => {
  const prevTitleRef = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (options && options.restoreOnUnmount) {
        document.title = prevTitleRef.current;
      }
    },
    [options],
  );
};

export { useDocumentTitle };
