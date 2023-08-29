// 1. Import the react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

// 2. Get a reference to the div with ID Root
const el = document.getElementById('root')

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(el)


// 5. Show the component on the screen
root.render(<App/>)