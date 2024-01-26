// RegisterCard Component
import { FC } from 'react';
import Input from '../atoms/Inputs';
import GoogleRegisterButton from '../molecules/GoogleRegisterButton';
import LoginButton from '../molecules/LoginButton';

interface RegisterCardProps {
  switchToLogin: () => void;
  isActive: boolean;
}

const RegisterCard: FC<RegisterCardProps> = ({ switchToLogin, isActive }) => {
  const handleRegistration = () => {
    // Logica de registro
  };

  const termsUrl = "/terms-and-conditions";

  const registerColor = isActive ? "#1D7607" : "black";
  const loginColor = !isActive ? "#1D7607" : "black";

  return (
    <div className="card-container p-4 bg-white rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold" style={{ color: registerColor }}>Regístrate</h2>
        <h1 className="text-lg font-bold" onClick={switchToLogin} style={{ color: loginColor }}>Iniciar Sesión</h1>
      </div>
      <GoogleRegisterButton />
      <div className="my-4 flex items-center justify-between">
        <hr className="w-full" /><span className="p-2 text-sm text-gray-500">o</span><hr className="w-full" />
      </div>
      <Input id="email" type="email" label="Email" />
      <Input id="username" type="text" label="Nombre de Usuario" />
      <Input id="password" type="password" label="Contraseña" />
      <Input id="confirm-password" type="password" label="Confirmar Contraseña" />
      <div className="flex justify-center my-4">
        <label className="flex items-center text-sm text-black">
          <input
            id="terms"
            type="checkbox"
            onChange={handleRegistration}
            style={{ marginRight: '8px' }}
          />
          Acepta los <a href={termsUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#1D7607' }}>términos y condiciones</a>
        </label>
      </div>
      <LoginButton onClick={handleRegistration}>Siguiente</LoginButton>
    </div>
  );
};

export default RegisterCard;

