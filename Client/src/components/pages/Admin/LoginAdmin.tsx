import React from "react";
import HeaderLogin from "../../templates/HeaderLogin";
import {Link } from 'react-router-dom';

const LoginAdmin = (): React.JSX.Element => {
  return (
    <>
      <HeaderLogin />
      <section className="bg-gradient-to-b from-green-700 to-black min-h-screen flex flex-col justify-center items-center gap-10">
        <h1 className="text-white font-semibold">Admin Login</h1>
        <form action="" className="flex flex-col gap-5 w-2/5">
          <label htmlFor="">
            <input
              type="text"
              className="w-full h-12 text-center text-3xl bg-gray-300"
              placeholder="👤"
            />
          </label>
          <label htmlFor="">
            <input
              type="text"
              className="w-full h-12 text-black text-center text-3xl bg-gray-300"
              placeholder="***"
            />
          </label>
          <Link to={'/dashboard-admin'}>
          <input
            type="submit"
            value="Login"
            className="w-full bg-primary text-white font-semibold h-12 text-2xl "
          />
          </Link>
        </form>
      </section>
    </>
  );
};

export default LoginAdmin;
