import React from "react";
import { Link } from "react-router-dom";

const Navbar = (): React.JSX.Element => {
  return (
    <>
      <nav className="w-1/3 min-h-screen bg-black border-t-8 border-green-800 flex justify-center items-start">

        <ul className="fixed flex flex-col mt-20 gap-3 text-xl">
          <li >
            <Link to={"/"} className="text-white hover:text-primary">Cuentas</Link>
          </li>
          <li>
            <Link to={"/password-generator"} className="text-white hover:text-primary">Generar Contraseña</Link>
          </li>
          <li>
            <Link to={"/notification-mailbox"} className="text-white hover:text-primary">Buzón de Notificaciones</Link>
          </li>
          <li>
            <Link to={"/connected-devices"} className="text-white hover:text-primary">Dispositivos Conectados</Link>
          </li>
          <li>
            <Link to={"/user-profile"} className="text-white hover:text-primary">Perfil de Usuario</Link>
          </li>
          <li>
            <Link to={"/how-use"} className="text-white hover:text-primary">Cómo usar Lock&Stock</Link>
          </li>
          <li>
            <Link to={"/help"} className="text-white hover:text-primary" >Ayuda</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
