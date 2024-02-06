// import React, { useState } from "react";
// import { Link, useLoaderData, useNavigate } from "react-router-dom";
// import ModalPasswordMaster from "../templates/modalPasswordMaster";
// import { servicesApp } from "../../services/services";
// import { hashData } from "../../services/hash";
// import { FieldValues } from "react-hook-form";

// const AccountsForm = (): React.JSX.Element => {


//   //datos de cuentas
//   const { response } = useLoaderData();
//   const [accounts, setAccounts] = useState([]);
//   console.log(response);

//   //modal
//   const [modal, setModal] = useState("hidden");

//   const navigate = useNavigate();

//   const changeModalVisibility = async () => {
//     setModal((prevModal) => (prevModal === "hidden" ? "fixed" : "hidden"));
//   };



//   //filtro 
//   const [filtro, setFiltro] = useState("");
  

//   const accountsFilter = response.filter((accounts) =>
//     accounts.Name_Aplication.toLowerCase().includes(filtro.toLowerCase()) || accounts.Email_Aplication.toLowerCase().includes(filtro.toLowerCase())
//     );


//     //ver contraseña
//     const [ view, setView ] = useState(true)


//     //desactivar modal 5 minutos 
//     const [ sendEdit, setSendEdit ]= useState(false)

    
//     //ir a pagina de editar cuenta
//     const navigateToEditPage = (itemId: string) => {
//       navigate(`/password-generator/${itemId}`);
//     };


//     const postConfirmPassword = async (data: FieldValues) => {
//       try {

//         //enviar contraseña del modal hasheada
//         const { passwordMaster } = data;

//         const response = {
//           password: await hashData(passwordMaster)
//         }

//         await servicesApp.postModal(response)

//         console.log(response)

//         if (response) {
//           //cerrar modal despues de contraseña
//           setModal((prevModal) => (prevModal === "hidden" ? "fixed" : "hidden"));

//           //ver contraseña
//           setView(false)

//         //ir a pagina de editar una cuenta
//           setSendEdit(true)

//           //tiempo que no aparecera el modal
//           setTimeout(()=>{
//             setSendEdit(false)
//           },1*60*5000)

//         }
   

//       } catch (error) {
//         if (error instanceof Error) {
//           throw new Error(error.message)
//         }
//       }
//     };



//     //borrar cuenta
//     const deleteAccount = async (itemId: string) => {
//       try {

//         const newData={
//           Id_Aplications: await hashData(itemId)
//         }

//         const response = await servicesApp.deleteAccountUser(newData);

//         //datos enviados
//         console.log(newData)

//         //respuesta de peticion
//         console.log(response)
       
//       } catch (error) {
//         if (error instanceof Error) {
//           throw new Error(error.message);
//         }
//       }
//     };
  
    


//   return (
//     <>
//       <section className="w-3/4 flex flex-col justify-center items-center gap-y-20 py-10">
//         <div className="flex gap-8 justify-center items-center">
//           <img
//             src="/src/images/accounts-icon.svg"
//             alt="account-icon"
//             className="h-10"
//           />
//           <h1
//             className="
//             text-primary font-medium text-5xl flex-1"
//           >
//             Cuentas
//           </h1>
//         </div>

//         <div className="flex w-10/12 gap-2">
//           <input
//             type="text"
//             placeholder="Busqueda"
//             className="w-10/12 h-8 flex-1 p-3 bg-white border border-black rounded-3xl"
//             value={filtro}
//             onChange={(e) => setFiltro(e.target.value)}
//           />
//         </div>

//         <section className="flex flex-col w-full items-center gap-4">
//           <div className="flex justify-around items-center gap-4 w-11/12">
//             <div className="min-w-16 max-w-16 h-full"></div>
//             <div className=" text-black text-sm font-bold min-w-28 max-w-28">
//               Aplicaciones
//             </div>
//             <div className=" text-black text-sm font-bold min-w-28 max-w-28">
//               Correo Electrónico
//             </div>
//             <div className=" text-black text-sm font-bold min-w-28 max-w-28">
//               Categoría
//             </div>
//             <div className=" text-black text-sm font-bold min-w-28 max-w-28">
//               Contraseña
//             </div>
//             <div className="flex justify-center text-black text-sm font-bold min-w-16 max-w-16">
//               Ver
//             </div>
//             <div className=" text-black text-sm font-bold min-w-28 max-w-28">
//               Editar / Eliminar
//             </div>
//           </div>

//           {accountsFilter.map((item) => (
//             <div
//               key={item.Id_Aplications}
//               className="flex justify-around items-center gap-4 w-11/12"
//             >
//               <figure className="flex justify-center min-w-16 max-w-16 text-black text-sm font-bold w-16">
//                 <img
//                   src={"/src/images/account-logos.svg"}
//                   alt={item.Name_Aplication}
//                   className="h-8 w-8"
//                 />
//               </figure>
//               <div className="text-black text-sm font-bold min-w-28 max-w-28">
//                 {item.Name_Aplication}
//               </div>
//               <div className="text-black text-sm font-bold min-w-28 max-w-28">
//                 {item.Email_Aplication}
//               </div>
//               <div className="text-black text-sm font-bold min-w-28 max-w-28">
//                 {item.Category_Aplication}
//               </div>



//               <div className="text-black text-sm font-bold min-w-28 max-w-28">
//                 {view? '**********' : item.Password_Aplication}
//               </div>



//               <div className="flex justify-center text-black text-sm font-bold min-w-16 max-w-16">


//                 <img
//                   src="/src/images/accounts-eye-icon.svg"
//                   alt="eye-icon"
//                   className="h-5 cursor-pointer"
//                   onClick={() => {
//                     sendEdit? postConfirmPassword(item.Id_Aplications) : setModal("fixed");
//                   }}
//                 />


//               </div>
//               <div className="flex justify-center text-black text-sm font-bold min-w-28 max-w-28 gap-4">


                
//                 <img
//                   src="/src/images/editar-icon.svg"
//                   alt="pen-icon-icon"
//                   className="h-5 cursor-pointer"
//                   onClick={() => {
//                     sendEdit ? navigateToEditPage(item.Id_Aplications) : setModal('fixed');
//                   }}
//                   />




//                 <img
//                   src="/src/images/eliminar-icon.svg"
//                   alt="trash-icon"
//                   className="h-5 cursor-pointer"
//                   onClick={() => {
//                     sendEdit? deleteAccount(item.Id_Aplications): setModal('fixed');
//                   }}
//                 />




//               </div>
//             </div>
//           ))}
//         </section>

//         <div className="w-full flex items-center justify-center gap-4">
//           <img src="/src/images/cross-icon.svg" alt="plus-icon" />

//           <Link to={"/password-generator"}>
//             <small
//               className="
//             text-primary font-small text-xl"
//             >
//               Añadir nueva aplicación
//             </small>
//           </Link>
//         </div>
//       </section>
//       <ModalPasswordMaster modal={modal} changeModal={changeModalVisibility}  postData={postConfirmPassword}/>
//     </>
//   );
// };

// export default AccountsForm;

import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ModalPasswordMaster from "../templates/modalPasswordMaster";
import UserContext from "../../UserContext";
import { servicesApp } from "../../services/services";
import { hashData } from "../../services/hash"; // Asegúrate de importar hashData si lo necesitas

const AccountsForm = () => {
  const navigate = useNavigate();
  const { loadUserAccounts } = useContext(UserContext);
  const [accounts, setAccounts] = useState([]);
  const [modal, setModal] = useState("hidden");
  const [filtro, setFiltro] = useState("");
  const [view, setView] = useState(true);
  const [sendEdit, setSendEdit] = useState(false);

  const fetchAccounts = useCallback(async () => {
    console.log("Haciendo petición para obtener cuentas...");
    const accountsData = await loadUserAccounts();
    setAccounts(accountsData || []); // Asegura que siempre tengas un array, incluso si la data es undefined
  }, [loadUserAccounts]);

  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);

  const changeModalVisibility = useCallback(() => {
    setModal((prevModal) => (prevModal === "hidden" ? "fixed" : "hidden"));
  }, []);

  const navigateToEditPage = useCallback((itemId) => {
    navigate(`/password-generator/${itemId}`);
  }, [navigate]);

  const postConfirmPassword = async data => {
    try {
      console.log("Enviando confirmación de contraseña:", data);
      const { passwordMaster } = data;
      const hashedPassword = await hashData(passwordMaster);
      const response = await servicesApp.postModal({ password: hashedPassword });
      if (response) {
        setModal('hidden');
        setView(false);
        setSendEdit(true);
        setTimeout(() => {
          setSendEdit(false);
        }, 300000); // 5 minutes
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAccount = async itemId => {
    try {
      const hashedId = await hashData(itemId);
      await servicesApp.deleteAccountUser({ Id_Aplications: hashedId });
    } catch (error) {
      console.error(error);
    }
  };

  const filteredAccounts = accounts && accounts.filter(account =>
    account.Name_Aplication.toLowerCase().includes(filtro.toLowerCase()) ||
    account.Email_Aplication.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <section className="w-3/4 flex flex-col justify-center items-center gap-y-20 py-10">
        {/* Header */}
        <div className="flex gap-8 justify-center items-center">
          <img src="/src/images/accounts-icon.svg" alt="account-icon" className="h-10" />
          <h1 className="text-primary font-medium text-5xl">Cuentas</h1>
        </div>
  
        {/* Search Input */}
        <div className="flex w-10/12 gap-2">
          <input
            type="text"
            placeholder="Búsqueda"
            className="w-full h-8 p-3 bg-white border border-black rounded-3xl"
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
          />
        </div>
  
        {/* Accounts List */}
        <section className="flex flex-col w-full items-center gap-4">
          <div className="flex justify-around items-center w-full text-black text-sm font-bold py-2">
            <div className="w-1/6 text-center">Icono</div>
            <div className="w-1/6 text-center">Aplicación</div>
            <div className="w-1/6 text-center">Correo</div>
            <div className="w-1/6 text-center">Categoría</div>
            <div className="w-1/6 text-center">Contraseña</div>
            <div className="w-1/6 text-center">Acciones</div>
          </div>
          {filteredAccounts && filteredAccounts.length > 0 ? (
            filteredAccounts.map(account => (
              <div key={account.Id_Aplications} className="flex justify-around items-center w-full py-2">
                <div className="w-1/6 text-center">
                  <img src="/src/images/account-logos.svg" alt={account.Name_Aplication} className="h-8 w-8 inline" />
                </div>
                <div className="w-1/6 text-center">{account.Name_Aplication}</div>
                <div className="w-1/6 text-center">{account.Email_Aplication}</div>
                <div className="w-1/6 text-center">{account.Category_Aplication}</div>
                <div className="w-1/6 text-center">{view ? '**********' : account.Password_Aplication}</div>
                <div className="w-1/6 flex justify-around">
                  <img
                    src="/src/images/accounts-eye-icon.svg"
                    alt="Ver"
                    className="h-5 cursor-pointer"
                    onClick={() => setView(!view)}
                  />
                  <img
                    src="/src/images/editar-icon.svg"
                    alt="Editar"
                    className="h-5 cursor-pointer"
                    onClick={() => navigateToEditPage(account.Id_Aplications)}
                  />
                  <img
                    src="/src/images/eliminar-icon.svg"
                    alt="Eliminar"
                    className="h-5 cursor-pointer"
                    onClick={() => deleteAccount(account.Id_Aplications)}
                  />
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron cuentas.</p>
          )}
        </section>
  
        {/* Add New Account */}
        <div className="w-full flex items-center justify-center gap-4">
          <Link to="/password-generator">
            <img src="/src/images/cross-icon.svg" alt="plus-icon" className="h-5 mr-2" />
            <small className="text-primary text-xl">Añadir nueva aplicación</small>
          </Link>
        </div>
      </section>
      <ModalPasswordMaster modal={modal} changeModal={changeModalVisibility} postData={postConfirmPassword} />
    </>
  );
  
};

export default AccountsForm;