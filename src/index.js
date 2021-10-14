import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from "./providers/auth";
import { ThemeProvider } from './providers/theme';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
