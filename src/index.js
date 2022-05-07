/* eslint-disable prettier/prettier */
/* eslint-disable  */
/* eslint-disable quotes */
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirebaseContextProvider } from "./context/firbaseContext";
import "./styles/app.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <FirebaseContextProvider>
      <App />
    </FirebaseContextProvider>
  </StrictMode>
);
