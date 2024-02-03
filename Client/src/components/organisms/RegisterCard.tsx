import { FC } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { servicesApp } from "../../services/services"; 
import LoginButton from "../molecules/LoginButton";
//import { zodResolver } from "@hookform/resolvers/zod";
//import registerSchema from "../pages/User/validations/registerValidation";

interface RegisterCardProps {
  switchToLogin: () => void;
  isActive: boolean;
}

const RegisterCard: FC<RegisterCardProps> = ({ switchToLogin, isActive }) => {
  // Aquí se elimina el resolver de la configuración
  const { handleSubmit, register, formState: { errors } } = useForm();

  const handleRegistration = async (formData) => {
    console.log(formData);
    try {
      // Directamente pasamos formData a la función register
      const response = await servicesApp.register(formData);
      console.log(response);
      // Aquí puedes manejar la respuesta del backend, como mostrar un mensaje de éxito o redirigir al usuario
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        // Aquí puedes manejar el error, como mostrar un mensaje al usuario
      }
    }
  };




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


    <section className="flex flex-col gap-2">
        <label htmlFor="Email_User" className="flex flex-col w-full">Correo Electronico
        <input id="Email_User" type="email" {...register("Email_User")} className="border border-black rounded h-9" /> 

{errors.Email_User && (
              <p className="text-red-500 font-medium">{`${errors.Email_User.message}`}</p>
            )}
                  </label>





        <label htmlFor="Name_User" className="flex flex-col w-full">Nombre
        <input id="Name_User" type="text" className="border border-black rounded h-9" {...register("Name_User")} />
        {errors.Name_User && (
              <p className="text-red-500 font-medium">{`${errors.Name_User.message}`}</p>
            )}
                  </label>



        <label htmlFor="SurName_User" className="flex flex-col w-full">Apellidos
        <input id="SurName_User" type="text" className="border border-black rounded h-9" {...register("SurName_User")} />
        {errors.SurName_User && (
              <p className="text-red-500 font-medium">{`${errors.SurName_User.message}`}</p>
            )}
      </label>


        <label htmlFor="Mobile_User" className="flex flex-col w-full">Numero de Telefono
        <input id="Mobile_User" type="tel" className="border border-black rounded h-9" {...register("Mobile_User")} />
        {errors.Mobile_User && (
              <p className="text-red-500 font-medium">{`${errors.Mobile_User.message}`}</p>
            )}
      </label>



        <label htmlFor="Password_User" className="flex flex-col w-full">Contraseña
        <input id="Password_User" type="password" className="border border-black rounded h-9" {...register("Password_User")} />
        {errors.Password_User && (
              <p className="text-red-500 font-medium">{`${errors.Password_User.message}`}</p>
            )}
      </label>



        <label htmlFor="Confirm_Password" className="flex flex-col w-full">Confirmar contraseña
        <input
          id="Confirm_Password"
          type="password"
          className="border border-black rounded h-9"
          {...register("Confirm_Password")}
        />
        {errors.Confirm_Password && (
              <p className="text-red-500 font-medium">{`${errors.Confirm_Password.message}`}</p>
            )}
      </label>



        <div className="flex justify-center items-center my-4 flex-col">
          <label className="flex items-center text-sm text-black">
            <input
              id="terms"
              type="checkbox"
              style={{ marginRight: "8px" }}
              {...register('terms')}
            />
            
            <span className="font-semibold text-base">
              Acepta los{" "}
              <Link
                to={"/terms"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1D7607" }}
                className="font-semibold"
              >
                términos y condiciones
              </Link>
            </span>
          </label>
          {errors.terms && (
              <p className="text-red-500 font-medium">{`${errors.terms.message}`}</p>
            )}
            
        </div>
        </section>


        <LoginButton>Siguiente</LoginButton>
      </div>
    </form>
  );
};

export default RegisterCard;
