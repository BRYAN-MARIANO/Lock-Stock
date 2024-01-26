// LoginCard Component
import { FC } from 'react';
import Input from '../atoms/Inputs';
import GoogleSignInButton from '../molecules/GoogleSignInButton';
import LoginButton from '../molecules/LoginButton';

interface LoginCardProps {
  switchToRegister: () => void;
  isActive: boolean;
}

const LoginCard: FC<LoginCardProps> = ({ switchToRegister, isActive }) => {
  const handleEmailLogin = () => {
    // Logica de login
  };

  const registerColor = !isActive ? "#1D7607" : "black";
  const loginColor = isActive ? "#1D7607" : "black";

  return (
    <div className="card-container p-4 bg-white rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold" onClick={switchToRegister} style={{ color: registerColor }}>Regístrate</h2>
        <h1 className="text-lg font-bold" style={{ color: loginColor }}>Iniciar Sesión</h1>
      </div>
      <GoogleSignInButton />
      <div className="my-4 flex items-center justify-between">
        <hr className="w-full" /><span className="p-2 text-sm text-gray-500">o</span><hr className="w-full" />
      </div>
      <Input id="email" type="email" label="Email" />
      <Input id="password" type="password" label="Contraseña" />
      <LoginButton onClick={handleEmailLogin}>Login</LoginButton>
      <div className="flex justify-end">
        <a href="#" className="text-sm text-[#1D7607] hover:underline mt-4">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  );
};

export default LoginCard;
