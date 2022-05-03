import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FirebaseContext from "./context/firbase";
import { app, dataBase } from "./lib/firebase";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <FirebaseContext.Provider value={{ app, dataBase }}>
      <App />
    </FirebaseContext.Provider>
  </StrictMode>
);
