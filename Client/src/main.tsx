<<<<<<< HEAD
import ReactDOM from 'react-dom/client'
import './index.css'
import React from 'react'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import UserContext from './UserContext'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <UserContext>
  <RouterProvider router={router} />
  </UserContext>
)
=======
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
>>>>>>> 6f444f0f8c1b76281e958bf4b3b982c34ffb5d29
