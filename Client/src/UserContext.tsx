// UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import { servicesApp } from '../src/services/services';

const UserContext = createContext();




export const UserProvider = ({ children }) => {
  // const [user, setUser] = useState(null); // Estado para la información del usuario
  // const [accounts, setAccounts] = useState([]); // Estado para las cuentas del usuario

  // // Función para cargar las cuentas del usuario
  // const loadUserAccounts = async () => {
  //   try {
  //     const fetchedAccounts = await servicesApp.getAccountsUser();
  //     setAccounts(fetchedAccounts || []);

  //   } catch (error) {
  //     console.error("Error al obtener las cuentas de usuario:", error);
  //   }
  // };

  // // Carga inicial de las cuentas
  // useEffect(() => {
  //   loadUserAccounts();
  // }, []);

  // // El valor que se pasa a través del contexto
  // const contextValue = {
  //   user,
  //   setUser,
  //   accounts,
  //   loadUserAccounts,
  // };


  const [ user, setUser ] = useState([]);
  useEffect(()=>{
    const getUser =async ()=>{
      try {
        const userId =  sessionStorage.getItem('userId') as string;

        const users = await servicesApp.getUserInfo(userId)

        setUser(users)
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message)
        }
      }
    }
    getUser()
  },[])


  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
