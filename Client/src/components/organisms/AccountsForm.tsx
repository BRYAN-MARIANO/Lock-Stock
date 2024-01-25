import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ModalPasswordMaster from "../templates/modalPasswordMaster";

const AccountsForm = (): React.JSX.Element => {


  //datos de cuentas
  const { response } = useLoaderData();

  //modal
  const [modal, setModal] = useState("hidden");
  const changeModalVisibility = () => {
    setModal((prevModal) => (prevModal === "hidden" ? "fixed" : "hidden"));
  };


  //filtro de cuentas
  const [filtro, setFiltro] = useState("");
  

  const accountsFilter = response.filter((accounts) =>
    accounts.Name_Aplication.toLowerCase().includes(filtro.toLowerCase()) || accounts.Email_Aplication.toLowerCase().includes(filtro.toLowerCase())
    );

    //ver contraseña
    const [ view, setView ] = useState(true)


    const viewPassword =()=>{
      
      setView(false)
    }


  return (
    <>
      <section className="w-3/4 flex flex-col justify-center items-center gap-y-20 py-10">
        <div className="flex gap-8 justify-center items-center">
          <img
            src="/src/images/accounts-icon.svg"
            alt="account-icon"
            className="h-10"
          />
          <h1
            className="
            text-primary font-medium text-5xl flex-1"
          >
            Cuentas
          </h1>
        </div>

        <div className="flex w-10/12 gap-2">
          <input
            type="text"
            className="w-10/12 flex-1 p-2 bg-white border border-black rounded-3xl"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
          <div className="p-2">
            <img src="/src/images/search.svg" alt="search-icon" />
          </div>
        </div>

        <section className="flex flex-col w-full items-center gap-4">
          <div className="flex justify-around items-center gap-4 w-11/12">
            <div className="min-w-16 max-w-16 h-full"></div>
            <div className=" text-black text-sm font-bold min-w-28 max-w-28">
              Aplicaciones
            </div>
            <div className=" text-black text-sm font-bold min-w-28 max-w-28">
              Correo Electrónico
            </div>
            <div className=" text-black text-sm font-bold min-w-28 max-w-28">
              Categoría
            </div>
            <div className=" text-black text-sm font-bold min-w-28 max-w-28">
              Contraseña
            </div>
            <div className="flex justify-center text-black text-sm font-bold min-w-16 max-w-16">
              Ver
            </div>
            <div className=" text-black text-sm font-bold min-w-28 max-w-28">
              Editar / Eliminar
            </div>
          </div>

          {accountsFilter.map((item) => (
            <div
              key={item.id}
              className="flex justify-around items-center gap-4 w-11/12"
            >
              <figure className="flex justify-center min-w-16 max-w-16 text-black text-sm font-bold w-16">
                <img
                  src={"/src/images/google-icon.svg"}
                  alt={item.Name_Aplication}
                  className="h-8 w-8"
                />
              </figure>
              <div className="text-black text-sm font-bold min-w-28 max-w-28">
                {item.Name_Aplication}
              </div>
              <div className="text-black text-sm font-bold min-w-28 max-w-28">
                {item.Email_Aplication}
              </div>
              <div className="text-black text-sm font-bold min-w-28 max-w-28">
                {item.Category_Aplication}
              </div>



              <div className="text-black text-sm font-bold min-w-28 max-w-28">
                {view? '**********' : item.Password_Aplication}
              </div>




              <div className="flex justify-center text-black text-sm font-bold min-w-16 max-w-16">


                <img
                  src="/src/images/accounts-eye-icon.svg"
                  alt="eye-icon"
                  className="h-5 cursor-pointer"
                  onClick={() => {
                    setModal("fixed");
                  }}
                />


              </div>
              <div className="flex justify-center text-black text-sm font-bold min-w-28 max-w-28 gap-4">
                <Link to={`/password-generator/${item.id}`}>
                  <img
                    src="/src/images/editar-icon.svg"
                    alt="pen-icon-icon"
                    className="h-5 cursor-pointer"
                  />
                </Link>
                <img
                  src="/src/images/eliminar-icon.svg"
                  alt="trash-icon"
                  className="h-5 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </section>

        <div className="w-full flex items-center justify-center gap-4">
          <img src="/src/images/cross-icon.svg" alt="plus-icon" />

          <Link to={"/password-generator"}>
            <small
              className="
            text-primary font-small text-xl"
            >
              Añadir nueva aplicación
            </small>
          </Link>
        </div>
      </section>
      <ModalPasswordMaster modal={modal} changeModal={changeModalVisibility} password={viewPassword}/>
    </>
  );
};

export default AccountsForm;
