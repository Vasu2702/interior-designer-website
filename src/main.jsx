import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/*
  main.jsx is the "entry point" of your React app.
  - It finds the <div id="root"></div> in index.html
  - It renders (shows) your <App /> component inside it
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode helps catch common mistakes while you are learning.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


