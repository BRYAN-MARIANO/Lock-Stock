import React from "react";
import HeaderMenu from "../../templates/HeaderMenu";
import Navbar from "../../templates/Navbar";
import Notification from "../../molecules/Notification";


const NotificationMailbox = (): React.JSX.Element => {
  // Obtener notificaciones
 

 
   let alternative = [
    {
      message: 'Operación exitosa',
      boolean: true,
    },
    {
      message: 'Error en la solicitud',
      boolean: false,
    },
    {
      message: 'Datos incompletos, por favor revisa el formulario',
      boolean: false,
    },
    {
      message: 'Usuario autorizado',
      boolean: true,
    },
    {
      message: 'La sesión ha expirado',
      boolean: false,
    },
    {
      message: 'Conexión restablecida, intenta nuevamente',
      boolean: true,
    },
    {
      message: 'No se encontraron resultados',
      boolean: false,
    },
    {
      message: 'Actualización disponible',
      boolean: true,
    },
    {
      message: 'Acceso denegado',
      boolean: false,
    },
    {
      message: 'Pago procesado correctamente',
      boolean: true,
    }
  ];
  
  






  return (
    <>
      <HeaderMenu />
      <section className="flex">
        <Navbar buzon />
        <section className="w-3/4 flex flex-col gap-10 my-20">
          <div className="flex gap-2 justify-center items-center">
            <h1 className="text-primary text-5xl font-semibold">{alternative.length}</h1>
            <img src="/src/images/mailbox-icon.svg" alt="help-icon" />
            <h1 className="text-primary text-3xl font-semibold">
              Buzón de Notificaciones
            </h1>
          </div>
          <section className="flex flex-col w-full h-full gap-5">
            {
              alternative.map((a, b)=>{
                return <Notification image={a.boolean} message={a.message} key={b}/>
              })
            }

          </section>
        </section>
      </section>
    </>
  );
};

export default NotificationMailbox;
