import React from 'react';
import ReactDOM from 'react-dom';  // Correct import for React 17
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Ensure this matches the id of your root element in index.html
);