import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  isHero: boolean;
  setIsHero: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isHero, setIsHero] = useState(false);
  
  return (
    <AppContext.Provider value={{ isHero, setIsHero }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
