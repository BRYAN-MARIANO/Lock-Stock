// RegisterCard Component
import { FC } from "react";
import input from "../atoms/Inputs";
//import GoogleRegisterButton from '../molecules/GoogleRegisterButton';
import LoginButton from "../molecules/LoginButton";
import React from "react";
import { Link } from "react-router-dom";
import {  FieldValues, useForm } from "react-hook-form";
import { servicesApp } from "../../services/services";

interface RegisterCardProps {
  switchToLogin: () => void;
  isActive: boolean;
}

const RegisterCard: FC<RegisterCardProps> = ({ switchToLogin, isActive }) => {
  const handleRegistration = async (formdata: FieldValues) => {
    
  try {
    console.log(formdata);
    const response = await servicesApp.register(formdata) 
    console.log(response);
  } catch (error ) {
    if(error instanceof Error){
      throw new Error(error.message);
        

    }
  }  
  };

  const { handleSubmit, register } = useForm();
  const termsUrl = "/terms-and-conditions";

  const registerColor = isActive ? "#1D7607" : "black";
  const loginColor = !isActive ? "#1D7607" : "black";

  return (
    <form onSubmit={handleSubmit(handleRegistration)}> 
      <div className="card-container p-4 bg-white rounded-lg shadow-md flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2
            className="text-lg font-bold cursor-pointer"
            style={{ color: registerColor }}
          >
            Regístrate
          </h2>
          <h1
            className="text-lg font-bold"
            onClick={switchToLogin}
            style={{ color: loginColor }}
          >
            Iniciar Sesión
          </h1>
        </div>
        {/* <GoogleRegisterButton /> */}
        <div className="my-4 flex items-center justify-between">
          <hr className="w-full" />
          <span className="p-2 text-sm text-gray-500">o</span>
          <hr className="w-full" />
        </div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} />
        <label htmlFor="username"></label>
        <input id="username" type="text" {...register("username")} />
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" {...register("password")} />
        <label htmlFor="confirm-password">Confirmar contraseña</label>
        <input
          id="confirm-password"
          type="password"
          {...register("confirm-password")}
        />
        <div className="flex justify-center my-4">
          <label className="flex items-center text-sm text-black">
            <input
              id="terms"
              type="checkbox"
              onChange={handleRegistration}
              style={{ marginRight: "8px" }}
            />
            <span>
              Acepta los{" "}
              <Link
                to={"/terms"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1D7607" }}
              >
                términos y condiciones
              </Link>
            </span>
          </label>
        </div>
        <LoginButton >Siguiente</LoginButton>
      </div>
    </form>
  );
};

export default RegisterCard;
