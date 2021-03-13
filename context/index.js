import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  // is Dark Mode enabled
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleDarkMode = () => setIsEnabled(!isEnabled);

  return (
    <AppContext.Provider value={[isEnabled, toggleDarkMode]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
