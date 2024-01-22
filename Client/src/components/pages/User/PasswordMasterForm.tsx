import React from "react";
import HeaderMenu from "../../templates/HeaderMenu";
import { useForm } from 'react-hook-form'

const PasswordMasterForm = (): React.JSX.Element => {

  const { handleSubmit, register, setError } = useForm()


  return (
    <>
    <HeaderMenu />
      <section className="form-password w-screen h-screen flex justify-center items-center flex-col gap-7">
        <h1 className="text-primary font-medium text-5xl">Establecer Contraseña</h1>

        <form action="" className="flex flex-col w-2/4 gap-3">
          <label htmlFor="" className="flex flex-col">Establecer Contraseña
            <input type="text" className="border border-black rounded" {...register('')}/>
          </label>
          <label htmlFor="" className="flex flex-col">Confirmar Contraseña
            <input type="text" className="border border-black rounded"/>
          </label>




          <label htmlFor="" className="flex flex-col">Establecer Pregunta de Seguridad
            <input type="text" className="border border-black rounded" {...register('')}/>
          </label>
          <label htmlFor="" className="flex flex-col">Confirmar Pregunta de Seguridad
            <input type="text" className="border border-black rounded"/>
          </label>




          <label htmlFor="" className="flex flex-col">Establecer Respuesta
            <input type="text" className="border border-black rounded" {...register('')}/>
          </label>
          <label htmlFor="" className="flex flex-col">Confirmar Respuesta
            <input type="text" className="border border-black rounded"/>
          </label>


          <input type="submit" value="Confirmar" className="m-auto w-full rounded bg-primary text-white font-medium mt-4 h-10"/>
        </form>
        <small className="font-semibold text-base">Sesion Iniciada como<span className="text-primary">Homer Simpson</span></small>

        <small className="text-primary font-semibold text-base">Cerrar Sesion</small>

      </section>
    </>
  );
};

export default PasswordMasterForm;
