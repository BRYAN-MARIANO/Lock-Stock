import React from "react";




const accounts = [
  {
    "id": 1,
    "iconSrc": "/src/images/email-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/accounts-eye-icon.svg",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 2,
    "iconSrc": "/src/images/google-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/open-eye-icon.png",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 3,
    "iconSrc": "/src/images/email-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/open-eye-icon.png",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 4,
    "iconSrc": "/src/images/google-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/open-eye-icon.png",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 5,
    "iconSrc": "/src/images/email-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/open-eye-icon.png",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 6,
    "iconSrc": "/src/images/google-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/open-eye-icon.png",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 7,
    "iconSrc": "/src/images/email-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/open-eye-icon.png",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 8,
    "iconSrc": "/src/images/google-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/accounts-eye-icon.svg",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 9,
    "iconSrc": "/src/images/email-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/accounts-eye-icon.svg",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 10,
    "iconSrc": "/src/images/google-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/open-eye-icon.png",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 11,
    "iconSrc": "/src/images/email-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/open-eye-icon.png",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 12,
    "iconSrc": "/src/images/google-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/open-eye-icon.png",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 13,
    "iconSrc": "/src/images/email-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/open-eye-icon.png",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 14,
    "iconSrc": "/src/images/google-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/open-eye-icon.png",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 15,
    "iconSrc": "/src/images/email-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/open-eye-icon.png",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  },
  {
    "id": 16,
    "iconSrc": "/src/images/google-icon.svg",
    "iconAlt": "LinkedIn icon",
    "label": "LinkedIn",
    "email": "prueba@gmail.com",
    "category": "Redes Sociales",
    "password": "LJu34gT@#",
    "eyeIconSrc": "/src/images/open-eye-icon.png",
    "eyeIconAlt": "open-eye-icon",
    "penIconSrc": "/src/images/pen-icon.png",
    "trashIconSrc": "/src/images/trash-icon.png"
  }
]



const AccountsForm = (): React.JSX.Element => {
  return (
    <>
      <section className="w-3/4 flex flex-col justify-center items-center gap-y-20 py-10">
        <div className="flex gap-8 justify-center items-center">
          <img
            src="/src/images/accounts-icon.svg"
            alt="account-icon"
            className="h-10"
          />
          <h1
            className="
            text-primary font-medium text-5xl flex-1"
          >
            Cuentas
          </h1>
        </div>



        <div className="flex w-10/12 gap-2">
          <input
            type="text"
            className="w-10/12 flex-1 p-2 bg-white border border-black rounded-3xl"
          />
          <div className="p-2">
            <img src="/src/images/search.svg" alt="search-icon" />
          </div>
        </div>





        <section className="flex  flex-col w-full items-center gap-4">


          <div className="flex justify-around items-center gap-4 w-11/12">
            <div className="min-w-16 max-w-16 h-full"></div>

            <div className=" text-black text-sm font-bold min-w-28 max-w-28">
              Aplicaciones
            </div>
            <div className=" text-black text-sm font-bold min-w-28 max-w-28">
              Correo Electrónico
            </div>
            <div className=" text-black text-sm font-bold min-w-28 max-w-28">
              Categoría
            </div>
            <div className=" text-black text-sm font-bold min-w-28 max-w-28">
              Contraseña
            </div>
            <div className="flex justify-center text-black text-sm font-bold min-w-16 max-w-16">Ver</div>
            <div className=" text-black text-sm font-bold min-w-28 max-w-28">
              Editar / Eliminar
            </div>
          </div>




          {accounts.map((item) => (
        <div key={item.id} className="flex justify-around items-center gap-4 w-11/12">
          <figure className="flex justify-center min-w-16 max-w-16 text-black text-sm font-bold w-16">
            <img src={item.iconSrc} alt={item.iconAlt} className="h-8 w-8" />
          </figure>
          <div className="text-black text-sm font-bold min-w-28 max-w-28">
            {item.label}
          </div>
          <div className="text-black text-sm font-bold min-w-28 max-w-28">
            {item.email}
          </div>
          <div className="text-black text-sm font-bold min-w-28 max-w-28">
            {item.category}
          </div>
          <div className="text-black text-sm font-bold min-w-28 max-w-28">
            {item.password}
          </div>
          <div className="flex justify-center text-black text-sm font-bold min-w-16 max-w-16">
          
            <img src="/src/images/accounts-eye-icon.svg" alt="eye-icon" className="h-5" />
          </div>
          <div className="flex justify-center text-black text-sm font-bold min-w-28 max-w-28 gap-4">
            <img src="/src/images/editar-icon.svg" alt="pen-icon-icon" className="h-5" />
            <img src="/src/images/eliminar-icon.svg" alt="trash-icon" className="h-5" />
          </div>
        </div>
      ))}
        </section>

        <div className="w-full flex items-center justify-center gap-4">
          <img src="/src/images/cross-icon.svg" alt="plus-icon" />
          <small
            className="
            text-primary font-small text-xl"
          >
            Añadir nueva aplicación
          </small>
        </div>
      </section>
    </>
  );
};

export default AccountsForm;
