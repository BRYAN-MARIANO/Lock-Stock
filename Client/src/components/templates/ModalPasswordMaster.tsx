import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { hashData } from "../../services/hash";
import { Link } from "react-router-dom";
import { servicesApp } from "../../services/services";


interface modalInterface {
  modal: string,
  changeModal: (change: string)=>void,
  password: ()=>void
}

const ModalPasswordMaster = ({ modal, changeModal, password }: modalInterface): React.JSX.Element => {


  const { handleSubmit, register } = useForm();

  const postConfirmPassword = async (data: FieldValues) => {
    try {

      const { passwordMaster } = data;
      const newData = await hashData(passwordMaster);

      const response = await servicesApp.postModal({
        response: newData
      })

      if (response) {
        changeModal('hidden');
      }


 
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  };




  return (
    <>
      <section className={`${modal} top-0 left-0 h-full w-full flex justify-center items-center z-50`}>
        <article className="h-80 w-2/4 rounded bg-white border-4 border-green-700 flex flex-col justify-center items-center">
          <p className="text-center text-primary font-semibold">Contraseña Maestra</p>

          <form
            className="w-11/12 h-10/12 flex flex-col gap-4 mx-auto"
            onSubmit={handleSubmit(postConfirmPassword)}
          >
            <label htmlFor="passwordMaster">
              <span>Contraseña</span>
              <input
                type="password"
                id="passwordMaster"
                className="w-full h-8 border border-black rounded"
                {...register("passwordMaster")}
              />
            </label>
            <input
              type="submit"
              value="Confirmar"
              className="bg-green-700 text-white font-medium w-full h-10 rounded" onClick={password}
            />
          </form>

          <small className="text-black text-base font-semibold">
            ¿Has olvidado tu contraseña maestra?
          </small>
          <Link to={'/recovery-password'}>
          <small className="text-primary text-base font-semibold">
            Recuperar Contraseña
          </small>
          </Link>
        </article>
      </section>
    </>
  );
};

export default ModalPasswordMaster;

