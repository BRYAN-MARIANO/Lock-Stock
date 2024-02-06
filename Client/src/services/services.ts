import { FieldValues } from "react-hook-form";

class Services {
  constructor() {}

  async getUserInfo(id: string){
    try {
      const methoudCrud = await fetch(`http://localhost:4000/users/${id}`)

      const response = await methoudCrud.json();

      return response 

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
        
      }
    }
  }





  async recoverPassword (formData: FieldValues){
    try {
      const methoudCrud = await fetch('añadir url',{
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(formData)
      })
      const response = await methoudCrud.json();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`message: ${error.message}`);
        
      }
    }
  }



  //Accounts-user
  async getAccountsUser() {
    try {

      const token = sessionStorage.getItem('accessToken'); // Asume que el token está almacenado en sessionStorage
      if (!token) {
        throw new Error("No se encontró el token de autenticación");
      }

      const idUser = sessionStorage.getItem('userId')

      
      const methoudCrud = await fetch(`http://localhost:4000/applications/${idUser}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
      });
  
      if (!methoudCrud.ok) {
        throw new Error("Error al obtener los datos de las cuentas");
      }
  

      const response = await methoudCrud.json();
      
      return {response} ; 
      // Ajusta según cómo necesites utilizar o manejar estos datos
    } catch (error) {
      console.error("Error en getAccountsUser:", error);
      throw error; // O maneja el error de manera que sea más adecuado para tu aplicación
    }
  }



  



  async updateUserProfile(data: FieldValues, userId: string, token: string) {
    try {
      const response = await fetch(`http://localhost:4000/users/${userId}`, { // Asegúrate de que el puerto sea el correcto.
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("No se pudo actualizar el perfil del usuario.");
      }
  
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);        
      }
    }
  }
  
  

  //password generator

  async putAccountUser(id: string, data: FieldValues) {
    try {
      console.log(id);
      const methodCrud = await fetch(`http://localhost:4000/applications/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!methodCrud.ok) {
        throw new Error("Error en la peticion");
      }

      const response = await methodCrud.json();
      return { response };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

// En tu archivo services.ts

// En tu archivo services.ts

async postApplication(data: FieldValues, id: string) {
  const accessToken = sessionStorage.getItem('accessToken');
  if (!accessToken) {
    throw new Error('Authentication token not found');
  }

  try {
    const response = await fetch(`http://localhost:4000/applications/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error posting application:', error);
    throw error;
  }
}




  
  






  //authentication-user
  async login(credentials: FieldValues): Promise<string | void> {
    try {
      console.log('Sending login request with credentials:', credentials);
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials),
      });
  
      console.log('Login response status:', response.status);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Login response data:', data);
  
      if (data.accessToken) {
        // Almacena el accessToken en el sessionStorage
        sessionStorage.setItem("accessToken", data.accessToken);
        console.log('Access token stored in sessionStorage');
      } else {
        throw new Error('No accessToken in response');
      }
      return data.accessToken;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Login error:', error.message);
        throw new Error(error.message);
      }
    }
  }
  

  async register(credentials: FieldValues) {
    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  //pruebas




  //modalPassword
  async postModal(data: FieldValues) {
    try {
      const methodCrud = await fetch(`http://localhost:3000/modal`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!methodCrud.ok) {
        throw new Error("error con la contraseña");
      }

      const response = await methodCrud.json();

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }


  async postPasswordMaster (id: string, data: FieldValues){
    try {
      const methoudCrud = await fetch(`http://localhost:4000/users/master/${id}`,{
        method:"POST",
        headers: {'content-type':'application/json'},
        body: JSON.stringify(data)
      })


      const response = await methoudCrud.json();
      console.log(response.message)

      return response
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
        
      }
    }
  }




}

export const servicesApp = new Services();
