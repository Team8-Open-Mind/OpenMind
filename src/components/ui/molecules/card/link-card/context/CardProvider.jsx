import { createContext, useContext, useMemo } from 'react';

// const initialState = {
//   createdAt: '',
//   description: '',
//   imageSource: '',
//   url: '',
//   folderId: '',
// };

const CardProviderContext = createContext();

const CardProvider = ({ children, ...rest }) => {
  const { createdAt, created_at, imageSource, image_source, folder_id, ...r } = rest;

  const value = useMemo(
    () => ({
      createdAt: createdAt || created_at,
      imageSource: imageSource || image_source,
      folderId: folder_id,
      ...r,
    }),
    [createdAt, created_at, folder_id, imageSource, image_source, r],
  );

  return <CardProviderContext.Provider value={value}>{children}</CardProviderContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCardProvider = () => {
  const context = useContext(CardProviderContext);

  if (context === undefined) throw new Error('useCardProvider must be used within a CardWrapper');

  return context;
};

export default CardProvider;
