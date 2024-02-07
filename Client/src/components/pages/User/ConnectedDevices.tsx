import React, { useState } from "react";
import Navbar from "../../templates/Navbar";
import HeaderMenu from "../../templates/HeaderMenu";


const ConnectedDevices = (): React.JSX.Element => {


  let response = [
    {
      movil: 'Samsung Galaxy S21',
      fecha: '2022-01-15',
      delete: 'https://example.com/delete-icon.png'
    },
    {
      movil: 'iPhone 13',
      fecha: '2022-03-22',
      delete: 'https://example.com/delete-icon.png'
    },
    {
      movil: 'OnePlus 9',
      fecha: '2022-05-30',
      delete: 'https://example.com/delete-icon.png'
    },
    {
      movil: 'Xiaomi Mi 11',
      fecha: '2022-07-04',
      delete: 'https://example.com/delete-icon.png'
    },
    {
      movil: 'Google Pixel 6',
      fecha: '2022-09-10',
      delete: 'https://example.com/delete-icon.png'
    },
    {
      movil: 'Huawei P50 Pro',
      fecha: '2022-11-20',
      delete: 'https://example.com/delete-icon.png'
    }
  ];
  
  


  //filtro de dispsitivos
  const [filtro, setFiltro] = useState("");
  const dispositivosFiltrados = response.filter((dispositivo: { movil: string; fecha: string; }) =>
    dispositivo.movil.toLowerCase().includes(filtro.toLowerCase()) ||
    dispositivo.fecha.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <HeaderMenu />
      <section className="flex">
        <Navbar dispositivos/>
        <section className="w-3/4 flex flex-col gap-10 my-20">
          <div className="flex gap-2 justify-center items-center">
            <img src="/src/images/mobile-icon.svg" alt="help-icon" />
            <h1 className="text-primary text-3xl font-semibold">
              Dispositivos Conectados
            </h1>
          </div>

          <label htmlFor="" className="h-8 flex items-center justify-center">
            <input
              type="text"
              className="p-2 w-3/4 border h-full border-black rounded-xl"
              value={filtro} placeholder="busqueda"
              onChange={(e) => setFiltro(e.target.value)}
            />
          </label>

          <table className="w-3/4 mx-auto table-fixed">
            <thead>
              <tr>
                <th className="text-primary">
                  Dispositivos Conectados &#9660;
                </th>
                <th className="text-primary">Fecha de Conexión &#9660;</th>
                <th className="text-primary">Eliminar &#9660;</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {dispositivosFiltrados.map((dispositivo: { movil: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; fecha: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; delete: string | undefined; }, index: React.Key | null | undefined) => (
                <tr key={index}>
                  <td>{dispositivo.movil}</td>
                  <td>{dispositivo.fecha}</td>
                  <td className="flex justify-center">
                    <img src={dispositivo.delete} alt="delete-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
};

export default ConnectedDevices;
