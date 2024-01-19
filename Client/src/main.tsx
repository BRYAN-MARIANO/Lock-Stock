import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RecoverPasswordForm from './components/organisms/RecoverPasswordForm';
import AccountsForm from './components/organisms/AccountsForm';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <>
          <RecoverPasswordForm/>
          <AccountsForm />
          </>
  </React.StrictMode>,
)
