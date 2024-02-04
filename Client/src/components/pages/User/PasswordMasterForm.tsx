import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import { usersContext } from "../../../UserContext";
import { zodResolver } from '@hookform/resolvers/zod';
import { passwordMasterSchema } from "./validations/passwordMaster";
import { hashData } from "../../../services/hash";
import { servicesApp } from "../../../services/services";
import HeaderMenu from "../../templates/HeaderMenu";

const PasswordMasterForm = (): React.JSX.Element => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(passwordMasterSchema)
  });
  const user = useContext(usersContext);

  // Observa los valores de los campos para la contraseña y la respuesta de seguridad
  const password = watch("Password_Master_User");
  const answer = watch("Answer_Security_User");

  const postData = async (data) => {
    console.log("Form data received:", data); // Esto mostrará los datos del formulario en la consola
  
    const hashedPassword = await hashData(data.password);
    const hashedAnswer = await hashData(data.answer);
  
    const newData = {
      Password_Master_User: hashedPassword,
      Question_Security_User: data.question,
      Answer_Security_User: hashedAnswer,
    };
  
    const token = sessionStorage.getItem('token');
    const userId = user?.Id_User; // Suponiendo que user es un objeto y tiene una propiedad Id_User
  
    console.log("Updating user profile for user ID:", userId); // Esto confirmará el ID del usuario que se está actualizando
  
    if (token && userId) {
      try {
        const updateResponse = await servicesApp.updateUserProfile(newData, userId, token);
        console.log("Update response:", updateResponse); // Esto mostrará la respuesta de la actualización
      } catch (error) {
        console.error("Error updating user profile:", error); // Esto capturará y mostrará cualquier error en la actualización
      }
    } else {
      console.error("Authentication token or user ID is missing");
    }
  };
  

  return (
    <>
      <HeaderMenu />
      <section className="form-password w-screen h-screen flex justify-center items-center flex-col gap-7">
        <h1 className="text-primary font-medium text-5xl">Establecer Contraseña Maestra</h1>

        <form className="flex flex-col w-2/4 gap-3" onSubmit={handleSubmit(postData)}>
          <label htmlFor="Password_Master_User" className="flex flex-col">Establecer Contraseña Maestra
            <input id="Password_Master_User" type="password" {...register('Password_Master_User')} />
            {errors.Password_Master_User && (
              <p className="text-red-500 font-medium">{errors.Password_Master_User.message}</p>
            )}
          </label>

          <label htmlFor="Confirm_Password" className="flex flex-col">Confirmar Contraseña Maestra
            <input id="Confirm_Password" type="password" {...register('Confirm_Password', { validate: value => value === password || 'Las contraseñas no coinciden' })} />
            {errors.Confirm_Password && (
              <p className="text-red-500 font-medium">{errors.Confirm_Password.message}</p>
            )}
          </label>

          <label htmlFor="Question_Security_User" className="flex flex-col">Pregunta de Seguridad
            <input id="Question_Security_User" type="text" {...register('Question_Security_User')} />
            {errors.Question_Security_User && (
              <p className="text-red-500 font-medium">{errors.Question_Security_User.message}</p>
            )}
          </label>

          <label htmlFor="Answer_Security_User" className="flex flex-col">Respuesta de Seguridad
            <input id="Answer_Security_User" type="text" {...register('Answer_Security_User')} />
            {errors.Answer_Security_User && (
              <p className="text-red-500 font-medium">{errors.Answer_Security_User.message}</p>
            )}
          </label>

          <label htmlFor="Confirm_Answer" className="flex flex-col">Confirmar Respuesta de Seguridad
            <input id="Confirm_Answer" type="text" {...register('Confirm_Answer', { validate: value => value === answer || 'Las respuestas no coinciden' })} />
            {errors.Confirm_Answer && (
              <p className="text-red-500 font-medium">{errors.Confirm_Answer.message}</p>
            )}
          </label>

          <input type="submit" value="Confirmar" className="m-auto w-full rounded bg-primary text-white font-medium mt-4 h-10"/>
        </form>
      </section>
    </>
  );
};

export default PasswordMasterForm;
