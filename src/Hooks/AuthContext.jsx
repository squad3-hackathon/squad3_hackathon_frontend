import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUserData(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
