import { createContext, useContext } from 'react';

const GridContext = createContext();

const GridProvider = ({ children }) => {
  return <GridContext.Provider>{children}</GridContext.Provider>;
};

export default GridProvider;

export const useGridProvider = () => {
  const context = useContext(GridContext);

  if (context === undefined) throw new Error('useGridProvider must be used within a GridProvider');

  return context;
};
