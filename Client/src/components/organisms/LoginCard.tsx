// LoginCard Component
import { FC } from 'react';
//import GoogleSignInButton from '../molecules/GoogleSignInButton';
import LoginButton from '../molecules/LoginButton';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { servicesApp } from '../../services/services';


interface LoginCardProps {
  switchToRegister: () => void;
  isActive: boolean;
}

const LoginCard: FC<LoginCardProps> = ({ switchToRegister, isActive }) => {
  const handleEmailLogin =async (data: FieldValues) => {
    
  try {
    
    const response = await servicesApp.login(data)  
    console.log(data);
    console.log(response);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
  
  };

  const {handleSubmit, register} = useForm();

  const registerColor = !isActive ? "#1D7607" : "black";
  const loginColor = isActive ? "#1D7607" : "black";

  return (
    <form onSubmit={handleSubmit(handleEmailLogin)}>
    <div className="card-container p-4 bg-white rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold" onClick={switchToRegister} style={{ color: registerColor }}>Regístrate</h2>
        <h1 className="text-lg font-bold" style={{ color: loginColor }}>Iniciar Sesión</h1>
      </div>
      {/* <GoogleSignInButton /> */}
      <div className="my-4 flex items-center justify-between">
        <hr className="w-full" /><span className="p-2 text-sm text-gray-500">o</span><hr className="w-full" />
      </div>
      <label htmlFor="email">Email</label>
      <input id="email" type="email"  {...register('email')}/>
      <label htmlFor="password">Contraseña</label>
      <input id="password" type="password"  {...register('password')}/>
      <LoginButton >Login</LoginButton>
      <div className="flex justify-end">
        <a href="#" className="text-sm text-[#1D7607] hover:underline mt-4">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
    </form>
  );
};

export default LoginCard;
