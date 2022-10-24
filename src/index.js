/** IMPORT REACT REDUX */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

/** STORE */
import { store } from "./app/store";

/** COMPONENT */
import App from "./App";

/** STYLE */
import "../src/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
