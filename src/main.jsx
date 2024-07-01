import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import App from './App.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ToastContainer theme="dark" position="top-right" autoClose={3000} closeOnClick pauseOnHover={false} />
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
