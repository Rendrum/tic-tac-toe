import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import './index.css';

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(React.createElement(App));
