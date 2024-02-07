// UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import { servicesApp } from '../src/services/services';

const UserContext = createContext();




export const UserProvider = ({ children }) => {

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
