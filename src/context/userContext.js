/* eslint-disable prettier/prettier */
import { createContext, useMemo } from "react";
import useAuthListener from "../hooks/use-auth-listener";

const UserContext = createContext(null);

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
  const { user } = useAuthListener();
  const values = useMemo(() => ({ user }), [user]);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export default UserContext;
