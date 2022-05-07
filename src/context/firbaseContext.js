/* eslint-disable prettier/prettier */
import { createContext, useMemo } from "react";
import dataBase, { auth } from "../lib/firebase";

const FirebaseContext = createContext(null);

// eslint-disable-next-line react/prop-types
export function FirebaseContextProvider({ children }) {
  const values = useMemo(() => ({ dataBase, auth }), []);

  return (
    <FirebaseContext.Provider value={values}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default FirebaseContext;
