import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import TeachersApp from "./TeachersApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <TeachersApp />
  </React.StrictMode>
);
