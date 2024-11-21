import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Certifique-se de que está importando o CSS


const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Root container missing in index.html");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
