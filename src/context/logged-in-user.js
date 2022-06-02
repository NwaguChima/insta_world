/* eslint-disable prettier/prettier */
import { createContext, useState, useMemo } from "react";

const LoggedInUserContext = createContext(null);

// eslint-disable-next-line react/prop-types
export function LoggedInUserContextProvider({ children }) {
  const [user, setUser] = useState({});

  const values = useMemo(() => ({ user, setUser }), [user]);

  return (
    <LoggedInUserContext.Provider value={values}>
      {children}
    </LoggedInUserContext.Provider>
  );
}

export default LoggedInUserContext;
