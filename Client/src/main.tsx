import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthenticationPage from '../src/components/register-login/templates/RegisterLoginCard';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('No se pudo encontrar el elemento raíz');


const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthenticationPage/>
  </React.StrictMode>
);
