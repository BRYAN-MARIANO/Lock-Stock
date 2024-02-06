import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import usersContext from "../../../UserContext";
import { servicesApp } from "../../../services/services";
import HeaderMenu from "../../templates/HeaderMenu";
import { useNavigate } from "react-router-dom";

const PasswordMasterForm = (): React.JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const user = useContext(usersContext);

  const postData = async (data) => {
    const { Password_Master_User, Confirm_Password, Question_Security_User, Answer_Security_User, Confirm_Answer } = data;
    
    // Verificación de que las contraseñas y respuestas coinciden
    if (Password_Master_User !== Confirm_Password) {
      console.error("Las contraseñas no coinciden.");
      return;
    }
    
    if (Answer_Security_User !== Confirm_Answer) {
      console.error("Las respuestas de seguridad no coinciden.");
      return;
    }

    // Preparar los datos para la actualización del perfil
    const newData = {
      Password_Master_User,
      Question_Security_User,
      Answer_Security_User,
    };
  
    // Recuperar el token y el ID del usuario del contexto o del almacenamiento de sesión
    const token = sessionStorage.getItem('accessToken');
    const userId = user?.Id_User || sessionStorage.getItem('userId');
  
    if (token && userId) {
      try {
        // Intentar actualizar el perfil del usuario con los nuevos datos
        const updateResponse = await servicesApp.updateUserProfile(newData, userId, token);
        console.log("Update response:", updateResponse);
        navigate('/accounts-user');
      } catch (error) {
        console.error("Error updating user profile:", error);
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
        <label htmlFor="Password_Master_User" className="flex flex-col">
          Establecer Contraseña Maestra
          <input id="Password_Master_User" type="password" {...register('Password_Master_User')} />
          {errors.Password_Master_User && <p className="text-red-500 font-medium">{errors.Password_Master_User.message}</p>}
        </label>

        <label htmlFor="Confirm_Password" className="flex flex-col">
          Confirmar Contraseña Maestra
          <input id="Confirm_Password" type="password" {...register('Confirm_Password')} />
          {errors.Confirm_Password && <p className="text-red-500 font-medium">{errors.Confirm_Password.message}</p>}
        </label>

        <label htmlFor="Question_Security_User" className="flex flex-col">
          Pregunta de Seguridad
          <input id="Question_Security_User" type="text" {...register('Question_Security_User')} />
          {errors.Question_Security_User && <p className="text-red-500 font-medium">{errors.Question_Security_User.message}</p>}
        </label>

        <label htmlFor="Answer_Security_User" className="flex flex-col">
          Respuesta de Seguridad
          <input id="Answer_Security_User" type="text" {...register('Answer_Security_User')} />
          {errors.Answer_Security_User && <p className="text-red-500 font-medium">{errors.Answer_Security_User.message}</p>}
        </label>

        <label htmlFor="Confirm_Answer" className="flex flex-col">
          Confirmar Respuesta de Seguridad
          <input id="Confirm_Answer" type="text" {...register('Confirm_Answer')} />
          {errors.Confirm_Answer && <p className="text-red-500 font-medium">{errors.Confirm_Answer.message}</p>}
        </label>

        <input type="submit" value="Confirmar" className="m-auto w-full rounded bg-primary text-white font-medium mt-4 h-10"/>
      </form>
    </section>
  </>
);
};

export default PasswordMasterForm;
