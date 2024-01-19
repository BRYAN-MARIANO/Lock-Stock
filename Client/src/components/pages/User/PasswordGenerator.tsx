import React from "react";
import Navbar from "../../templates/Navbar";
import HeaderMenu from "../../templates/HeaderMenu";

const PasswordGenerator = (): React.JSX.Element => {
  return (
    <>
      <HeaderMenu />
      <section className="flex">
        <Navbar />
        <section className="w-full flex flex-col gap-10 my-20">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="/src/images/password-generator-icon.svg"
              alt="help-icon"
            />
            <h1 className="text-primary text-3xl font-semibold">
              Generar Contraseñas
            </h1>
          </div>

          <section className="w-3/4 flex flex-col mx-auto gap-3">
            <label htmlFor="" className="flex flex-col w-full text-xl gap-1">
              Nombre de Aplicación
              <input
                type="text"
                className="w-full h-8 border border-black rounded"
              />
            </label>

            <label htmlFor="" className="flex flex-col w-full text-xl gap-1">
              Email
              <input
                type="text"
                className="w-full h-8 border border-black rounded"
              />
            </label>

            <div className="flex">



                <div className="w-1/2">
              <label htmlFor="" className="flex flex-col w-5/6 text-xl gap-1 ">
                Username
                </label>
                <div className="flex border border-black rounded w-5/6 h-8">
                <input
                  type="text"
                  className="w-full h-full"
                />
                <img src="/src/images/copy-icon.svg" alt="copy-icon" className="h-full" />
                </div>



                <label htmlFor="" className="flex flex-col w-5/6 text-xl gap-1 ">
                Username
                </label>
                <div className="flex border border-black rounded w-5/6 h-8">
                <input
                  type="text"
                  className="w-full h-full"
                />
                                <img src="/src/images/eye-icon.svg" alt="copy-icon" className="h-full" />

                <img src="/src/images/copy-icon.svg" alt="copy-icon" className="h-full" />
                </div>

              <div className="flex gap-5">
              <input
                type="submit"
                value="Guardar"
                className="bg-primary text-white text-xl p-3 px-8 rounded-md font-medium mt-4"
              />

<input
                type="submit"
                value="Cancelar"
                className="bg-red-700 text-white text-xl p-3 px-8 rounded-md font-medium mt-4"
              />
              </div>

</div>










              <div className="p-5 bg-gray-200 w-1/2 h-80 rounded">
                <div className="grid grid-cols-2 grid-rows-auto h-full bg-white p-5 rounded justify-items-center gap-2 justify-center">
                  
                  

                  <div className="col-span-2 flex gap-2 justify-center w-full">
                  <p className=" flex justify-center items-center">
                    Pgt%F14Hisa_s·
                  </p>

                  <img src="/src/images/copy-icon.svg" alt="copy-icon" className="h-full bg-gray-200 rounded" />

                  </div>



                  <p className="row-start-2 flex justify-center items-center" >Cantidad</p>
                  <div className="col-start-2 row-end-3 bg-gray-200 p-2 h-8 flex justify-center items-center">
                  <p>13</p>
                  </div>


                  <p className="row-start-3 flex justify-center items-center">Numeros</p>

                  <label className="relative cursor-pointer row-end-4 top-1 ">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary "></div>
                  </label>



                  <p className="row-start-4 col-start-1 text-center">Caracteres Especiales</p>

                  <label className="relative cursor-pointer row-end-5 col-start-2 top-4">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary "></div>
                  </label>




                  <div className="row-start-5 col-start-1 col-end-3 flex gap-2">

                    <button className="bg-primary text-white font-semibold ">
                      Generar Contraseña
                    </button>
                  </div>






                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default PasswordGenerator;
