import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { servicesApp } from '../../services/services';
import { zodResolver } from '@hookform/resolvers/zod';
import loginSchema from '../pages/User/validations/loginForm';
import { useNavigate } from 'react-router';
import LoginButton from '../molecules/LoginButton';

const LoginCard: FC<LoginCardProps> = ({ switchToRegister, isActive }) => {
  const navigate = useNavigate();

  const handleEmailLogin = async (data: FieldValues) => {
    try {
      const response = await servicesApp.login(data);
      if (response) { // Si el login es exitoso, navigate a '/accounts-user'
        navigate('/accounts-user');
      }
    } catch (error) {
      console.error(error);
      // Manejar el error de manera adecuada (mostrar un mensaje al usuario, por ejemplo)
    }
  };


  const {handleSubmit, register, formState: { errors }} = useForm({
    resolver: zodResolver(loginSchema)
  });

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
   

      <section className='flex flex-col gap-4'>

      <label htmlFor="Email_User" className="flex flex-col w-full">Email
      <input id="Email_User" type="email" className="border border-black rounded h-9"  {...register('Email_User')}/>
      {errors.Email_User && (
              <p className="text-red-500 font-medium">{`${errors.Email_User.message}`}</p>
            )}
      </label>
      
      <label htmlFor="Password_User" className="flex flex-col w-full">Contraseña
      <input id="password" type="password" className="border border-black rounded h-9" {...register('Password_User')}/>
      {errors.Password_User && (
              <p className="text-red-500 font-medium">{`${errors.Password_User.message}`}</p>
            )}
      </label>


      <LoginButton>Acceso</LoginButton>
      </section>

      <div className="flex justify-end">
        <a href="#" className="font-semibold text-sm text-[#1D7607] hover:underline mt-4">¿Olvidaste tu contraseña?</a>
      </div>

    </div>
    </form>
  );
};

export default LoginCard;
