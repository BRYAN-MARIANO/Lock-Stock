import React, { useContext } from "react";
import { FieldValues, useForm } from 'react-hook-form'
import { usersContext } from "../../../UserContext";
import { zodResolver } from '@hookform/resolvers/zod';
import { passwordMasterSchema } from "./validations/passwordMaster";
import { hashData } from "../../../services/hash";
import { servicesApp } from "../../../services/services";
import HeaderLogin from "../../templates/HeaderLogin";
import { useNavigate } from "react-router";


const PasswordMasterForm = (): React.JSX.Element => {

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: zodResolver(passwordMasterSchema)
  })

  const user = useContext(usersContext)


  const Navigate = useNavigate();

  const postData = async (data: FieldValues)=>{
    try {


      const Email_User = localStorage.getItem('Email_User');
      const Name_User = localStorage.getItem('Name_User');
      const SurName_User = localStorage.getItem('SurName_User');
      const Mobile_User = localStorage.getItem('Mobile_User');
      const Password_User = localStorage.getItem('Password_User');
      const Confirm_Password = localStorage.getItem('Confirm_Password');


      const newData = {
        ...data,
        Email_User: Email_User,
        Name_User: Name_User,
        SurName_User: SurName_User,
        Mobile_User: Mobile_User,
        Password_User: Password_User,
        Confirm_Password: Confirm_Password
      }


      localStorage.clear();



      if (true) {
        Navigate('/accounts-user')
      }

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
    }
  }

  return (
    <>
    <HeaderLogin />
      <section className="form-password w-screen h-screen flex justify-center items-center flex-col gap-7">
        <h1 className="text-primary font-medium text-5xl">Establecer Contraseña</h1>

        <form className="flex flex-col w-2/4 gap-3" onSubmit={handleSubmit(postData)}>




          <label htmlFor="password" className="flex flex-col">Establecer Contraseña
            <input id="password" type="password" className="border border-black rounded" {...register('password')} />
                         {errors.password && (
              <p className="text-red-500 font-medium">{`${errors.password.message}`}</p>
            )}




          </label>
          <label htmlFor="confirmPassword" className="flex flex-col">Confirmar Contraseña
            <input id="confirmPassword" type="password" className="border border-black rounded" {...register('confirmPassword')} />

                         {errors.confirmPassword && (
              <p className="text-red-500 font-medium">{`${errors.confirmPassword.message}`}</p>
            )}
          </label>





          <label htmlFor="answer" className="flex flex-col">Establecer Pregunta de Seguridad
            <input type="text" id="answer" className="border border-black rounded" {...register('answer')} />
            {errors.answer && (
              <p className="text-red-500 font-medium">{`${errors.answer.message}`}</p>
            )}
          </label>
          <label htmlFor="confirmAnswer" className="flex flex-col">Confirmar Pregunta de Seguridad
            <input id="confirmAnswer" type="text" className="border border-black rounded" {...register('confirmAnswer')} />
            {errors.confirmAnswer && (
              <p className="text-red-500 font-medium">{`${errors.confirmAnswer.message}`}</p>
            )}
          </label>




          <label htmlFor="response" className="flex flex-col">Establecer Respuesta
            <input id="response" type="text" className="border border-black rounded" {...register('response')} />
            {errors.response && (
              <p className="text-red-500 font-medium">{`${errors.response.message}`}</p>
            )}
          </label>
          <label htmlFor="confirmResponse" className="flex flex-col">Confirmar Respuesta
            <input id="confirmResponse" type="text" className="border border-black rounded" {...register('confirmResponse')} />
            {errors.confirmResponse && (
              <p className="text-red-500 font-medium">{`${errors.confirmResponse.message}`}</p>
            )}
          </label>


          <input type="submit" value="Confirmar" className="m-auto w-full rounded bg-primary text-white font-medium mt-4 h-10"/>
        </form>



        <small className="font-semibold text-base">Sesion Iniciada como<span className="text-primary"> {user.Name_User}</span></small>



        <small className="text-primary font-semibold text-base">Cerrar Sesion</small>

      </section>
    </>
  );
};

export default PasswordMasterForm;
