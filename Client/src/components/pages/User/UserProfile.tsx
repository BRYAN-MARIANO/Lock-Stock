import React, { useContext, useRef, useState } from "react";
import Navbar from "../../templates/Navbar";
import HeaderMenu from "../../templates/HeaderMenu";
import { useLoaderData } from "react-router-dom";
import { servicesApp } from "../../../services/services";
import { usersContext } from "../../../UserContext";




const UserProfile = (): React.JSX.Element => {


// // Almacenar el token en sessionStorage
// sessionStorage.setItem('token', 'hola mundo');
// let token = sessionStorage.getItem('token');


const user = useContext(usersContext)

//editar perfil
const nameRef = useRef(null)
const lastNameRef = useRef(null)
const emailRef = useRef(null)
const mobileRef = useRef(null)
const nameUserRef = useRef(null)


const editProfile = async (ref, fieldName) => {
  try {
    await servicesApp.putProfile(
      { [fieldName]: `${ref.current.textContent}` },
      user.id
    );
  } catch (error) {
    console.error(`Error al editar ${fieldName}:`, error);
  }
};








  return (
    <>
      <HeaderMenu />
      <section className="flex">
        <Navbar />
        <section className="w-full flex flex-col gap-10 my-20">
          <div className="flex gap-2 justify-center items-center">
            <img src="/src/images/perfil-user-icon.svg" alt="help-icon" />
            <h1 className="text-primary text-5xl font-medium">
              Perfil de Usuario
            </h1>
          </div>
          <section className="flex w-full justify-center gap-10">
            <article>
              <figure>
                <img src="/src/images/user-icon.svg" alt="user-icon" />
              </figure>
            </article>
            <article className="flex-col w-1/2">



              <table className="w-full h-full ">



                    <tr>
                      <td className="font-semibold">Nombre</td>


                      <td contentEditable ref={nameRef}>{user.Name_User}</td>


                      <td>


                        <figure className="flex gap-10">


                        <img src="/src/images/editar-icon.svg" alt="edit-icon" onClick={() => editProfile(nameRef, 'Name_User')} />





                          <img src="/src/images/eliminar-icon.svg" alt="delete-icon" />
                        </figure>



                      </td>
                    </tr>









                    <tr>
                      <td className="font-semibold">Apellidos</td>
                      <td>{user.SurName_User}</td>
                      <td>
                        <figure className="flex gap-10">
                          <img src="/src/images/editar-icon.svg" alt="edit-icon" />
                          <img src="/src/images/eliminar-icon.svg" alt="delete-icon" />
                        </figure>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Correo Electrónico</td>
                      <td>{user.Email_User}</td>
                      <td>
                        <figure className="flex gap-10">
                          <img src="/src/images/editar-icon.svg" alt="edit-icon" />
                          <img src="/src/images/eliminar-icon.svg" alt="delete-icon" />
                        </figure>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Teléfono Móvil</td>
                      <td>{user.Mobile_User}</td>
                      <td>
                        <figure className="flex gap-10">
                          <img src="/src/images/editar-icon.svg" alt="edit-icon" />
                          <img src="/src/images/eliminar-icon.svg" alt="delete-icon" />
                        </figure>
                      </td>
                    </tr>

                    <tr>
                      <td className="font-semibold">Nombre de Usuario</td>
                      <td>{'bryan'}</td>
                      <td>
                        <figure className="flex gap-10">
                          <img src="/src/images/editar-icon.svg" alt="edit-icon" />
                          <img src="/src/images/eliminar-icon.svg" alt="delete-icon" />
                        </figure>
                      </td>
                    </tr>
              </table>
            </article>
          </section>
        </section>
      </section>
    </>
  );
};

export default UserProfile;
