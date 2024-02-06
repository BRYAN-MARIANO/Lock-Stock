import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './UserContext'; // Asegúrate de exportar UserProvider desde UserContext.js

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <UserProvider> {/* Usa el UserProvider aquí */}
      <RouterProvider router={router} />
    </UserProvider>
  );
}

