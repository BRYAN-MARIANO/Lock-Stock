import React from "react";
import Navbar from "../../templates/Navbar";
import HeaderMenu from "../../templates/HeaderMenu";

const UserProfile = (): React.JSX.Element => {
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

                
              <table className="w-full h-full">




                <tr>
                  <td className="font-semibold">Nombre</td>
                  <td>Homer</td>
                  <td>
                    <figure className="flex gap-10">
                      <img src="/src/images/editar-icon.svg" alt="" />
                      <img src="/src/images/eliminar-icon.svg" alt="" />
                    </figure>
                  </td>
                </tr>


                <tr>
                  <td className="font-semibold">Apellidos</td>
                  <td>Simpson</td>
                  <td>
                    <figure className="flex gap-10">
                      <img src="/src/images/editar-icon.svg" alt="" />
                      <img src="/src/images/eliminar-icon.svg" alt="" />
                    </figure>
                  </td>
                </tr>


                <tr>
                  <td className="font-semibold">Correo Electrónico</td>
                  <td>Homer1929@gmail.com</td>
                  <td>
                    <figure className="flex gap-10">
                      <img src="/src/images/editar-icon.svg" alt="" />
                      <img src="/src/images/eliminar-icon.svg" alt="" />
                    </figure>
                  </td>
                </tr>


                <tr>
                  <td className="font-semibold">Teléfono Móvil</td>
                  <td>674257642</td>
                  <td>
                    <figure className="flex gap-10">
                      <img src="/src/images/editar-icon.svg" alt="" />
                      <img src="/src/images/eliminar-icon.svg" alt="" />
                    </figure>
                  </td>
                </tr>


                <tr>
                  <td className="font-semibold">Nombre de Usuario</td>
                  <td>Homer123</td>
                  <td>
                    <figure className="flex gap-10">
                      <img src="/src/images/editar-icon.svg" alt="" />
                      <img src="/src/images/eliminar-icon.svg" alt="" />
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
