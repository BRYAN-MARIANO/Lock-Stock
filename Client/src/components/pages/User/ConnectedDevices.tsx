import React from "react";
import Navbar from "../../templates/Navbar";
import HeaderMenu from "../../templates/HeaderMenu";

const ConnectedDevices = (): React.JSX.Element => {

  //dispositivo desde el que se conecta
  const obtenerTipoDispositivo = () => {

    const userAgent = navigator.userAgent;
  
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      return 'Móvil';
    } else if (/iPad|Tablet|PlayBook|Kindle|KFAPWI|Silk|GT-P|SM-T|Nexus|TAB|SCH-I|Acer Iconia|Asus|Dell|HP|Lenovo|YOGA|ThinkPad|IdeaPad/i.test(userAgent)) {
      return 'Tableta';
    } else {
      return 'Ordenador';
    }
  }

  //ultima vez que se conectaron
  const lastConexion = new Date()
  console.log(lastConexion)

  //eliminar dispositivo





  const tipoDispositivo = obtenerTipoDispositivo();
  console.log('Tipo de dispositivo:', tipoDispositivo);
  

  return (
    <>
      <HeaderMenu />
      <section className="flex">
        <Navbar />
        <section className="w-full flex flex-col gap-10 my-20">
          <div className="flex gap-2 justify-center items-center">
            <img src="/src/images/mobile-icon.svg" alt="help-icon" />
            <h1 className="text-primary text-3xl font-semibold">
              Dispositivos Conectados
            </h1>
          </div>

          <label htmlFor="" className="h-8 flex items-center justify-center">
            <input 
              type="text"
              className="w-3/4 border border-black rounded-xl"
            />
            <button className="h-full bg-[url(/src/images/search.svg)] bg-center"></button>
          </label>

          <table className="w-3/4 mx-auto table-fixed">
            <thead>
              <tr>
                <th className="text-primary">Dispositivos Conectados &#9660;</th>
                <th className="text-primary">Fecha de Conexión &#9660;</th>
                <th className="text-primary">Eliminar &#9660;</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>MovilM11T</td>
                <td >23/11/2023 11:07</td>
                <td className="flex justify-center">
                  <img src="/src/images/eliminar-icon.svg" alt="Eliminar" />
                </td>
              </tr>
              <tr>
                <td>MovilM11T</td>
                <td>23/11/2023 11:07</td>
                <td className="flex justify-center">
                  <img src="/src/images/eliminar-icon.svg" alt="Eliminar" />
                </td>
              </tr>
              <tr>
                <td>MovilM11T</td>
                <td>23/11/2023 11:07</td>
                <td className="flex justify-center">
                  <img src="/src/images/eliminar-icon.svg" alt="Eliminar" />
                </td>
              </tr>
              <tr>
                <td>MovilM11T</td>
                <td>23/11/2023 11:07</td>
                <td className="flex justify-center">
                  <img src="/src/images/eliminar-icon.svg" alt="Eliminar" />
                </td>
              </tr>
              <tr>
                <td>MovilM11T</td>
                <td>23/11/2023 11:07</td>
                <td className="flex justify-center">
                  <img src="/src/images/eliminar-icon.svg" alt="Eliminar" />
                </td>
              </tr>
              <tr>
                <td>MovilM11T</td>
                <td>23/11/2023 11:07</td>
                <td className="flex justify-center">
                  <img src="/src/images/eliminar-icon.svg" alt="Eliminar" />
                </td>
              </tr>
              <tr>
                <td>MovilM11T</td>
                <td>23/11/2023 11:07</td>
                <td className="flex justify-center">
                  <img src="/src/images/eliminar-icon.svg" alt="Eliminar" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
};

export default ConnectedDevices;
