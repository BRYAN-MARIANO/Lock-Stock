import HeaderMenu from "../../templates/HeaderMenu";
import Navbar from "../../templates/Navbar";

const NotificationMailbox = (): React.JSX.Element => {
  return (
    <>
      <HeaderMenu />
      <section className="flex">
        <Navbar />
        <section className="w-full flex flex-col gap-10 my-20">
          <div className="flex gap-2 justify-center items-center">
            <h1 className="text-primary text-5xl font-semibold">3</h1>
            <img src="/src/images/mailbox-icon.svg" alt="help-icon" />
            <h1 className="text-primary text-3xl font-semibold">
              Buzón de Notificaciones
            </h1>
          </div>
          <section className="flex flex-col w-full h-full gap-5"> 

            <article className="flex justify-center gap-3">
              <div className="w-3/4 border border-black rounded-xl flex items-center">
                <p className="mx-2">Nueva Contraseña</p>
              </div>
              <figure>
                <img src="/src/images/notification-open-icon.svg" alt="" />
              </figure>
            </article>

            <article className="flex justify-center gap-3">
              <div className="w-3/4 border border-black rounded-xl flex items-center">
                <p className="mx-2">Nueva Contraseña</p>
              </div>
              <figure>
                <img src="/src/images/notification-close-icon.svg" alt="" />
              </figure>
            </article>

            <article className="flex justify-center gap-3">
              <div className="w-3/4 border border-black rounded-xl flex items-center">
                <p className="mx-2">Nueva Contraseña</p>
              </div>
              <figure>
                <img src="/src/images/notification-close-icon.svg" alt="" />
              </figure>
            </article>

            <article className="flex justify-center gap-3">
              <div className="w-3/4 border border-black rounded-xl flex items-center">
                <p className="mx-2">Nueva Contraseña</p>
              </div>
              <figure>
                <img src="/src/images/notification-close-icon.svg" alt="" />
              </figure>
            </article>

          </section>
        </section>
      </section>
    </>
  );
};

export default NotificationMailbox;
