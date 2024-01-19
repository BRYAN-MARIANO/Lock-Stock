import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderMenu = (): React.JSX.Element => {
  const [menu, setMenu] = useState("hidden");

  const menuOpen = () => {
    setMenu((prevMenu) => (prevMenu === "hidden" ? "absolute" : "hidden"));
  };

  return (
    <>
      <header className="w-screen bg-black h-32 flex items-center justify-between">
        <img src="/src/images/logo.png" alt="logo" className="h-2/4 ml-4" />

        <figure className="h-full flex gap-5 items-center">
          <div className="h-full flex flex-col justify-center">
            <p className="text-primary text-2xl font-semibold">Bienvenido</p>
            <p className="text-primary text-2xl font-semibold">Usuario</p>
          </div>
          <img
            src="/src/images/user-icon.svg"
            alt="user-icon"
            className="h-3/4 mr-4"
            onClick={menuOpen}
          />
        </figure>
      </header>

      <div className={`bg-black right-10 w-48 p-5 h-20 ${menu} `}>
        <ul className="flex flex-col h-full w-full text-white ">
          <li className="flex items-center h-full justify-center">
            <Link to={"/login-admin"} className="text-white hover:text-primary ">
              Cerrar Sesion
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderMenu;
