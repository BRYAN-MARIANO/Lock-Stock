import { FieldValues } from "react-hook-form";

class Services {
  constructor() {}

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



  //profile
  async getProfile() {
    try {
      const method = await fetch("http://localhost:4000/users");
      const data = await method.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  async postProfile(data: FieldValues) {
    try {
      const method = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const response = await method.json();

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  async putProfile(edit: object, id: number, token: string) {
    try {
      const methodUser = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify(edit),
      });
  
      if (!methodUser.ok) {
        throw new Error("Response not ok");
      }
  
      const data = await methodUser.json();
      return { data };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
  

  //Accounts-user

  async deleteAplications(id: number) {
    try {
      const methodCrud = await fetch(
        `http://localhost:3000/Devices_User/${id}`,
        {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        }
      );

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

  //Accounts-user
  async getAccountsUser() {
    try {
      
      const token = sessionStorage.getItem('accessToken'); // Asume que el token está almacenado en sessionStorage
      if (!token) {
        throw new Error("No se encontró el token de autenticación");
      }
      
      const response = await fetch(`http://localhost:4000/applications/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Asegúrate de que el back end espera el token en este formato
        },
      });
  
      if (!response.ok) {
        throw new Error("Error al obtener los datos de las cuentas");
      }
  
      const accounts = await response.json();
      console.log(accounts); // O maneja los datos de las cuentas como necesites
      return { accounts }; // Ajusta según cómo necesites utilizar o manejar estos datos
    } catch (error) {
      console.error("Error en getAccountsUser:", error);
      throw error; // O maneja el error de manera que sea más adecuado para tu aplicación
    }
  }
  

  async deleteAccountUser(data: object) {
    try {
      const methodCrud = await fetch(`http://localhost:3000/modal`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!methodCrud.ok) {
        throw new Error("error en eliminacion de cuenta");
      }

      const response = await methodCrud.json();

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  async updateUserProfile(data, userId, token) {
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
      throw new Error(error.message);
    }
  }
  
  

  //password generator

  async putAccountUser(id, data: FieldValues) {
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

async postApplication(data) {
  const accessToken = sessionStorage.getItem('accessToken');
  if (!accessToken) {
    throw new Error('Authentication token not found');
  }

  try {
    const response = await fetch('http://localhost:4000/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`, // Asegúrate de incluir el token aquí
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




  
  

  //notificationMailBox
  async postNotificationUser(data: boolean) {
    try {
      const method = await fetch("", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const response = await method.json();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  //Users
  async getUser() {
    try {
      const method = await fetch("");
      const { response } = await method.json();
      return { response };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  async postUser(data: FieldValues) {
    try {
      const method = await fetch("", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const response = await method.json();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  //notifications user
  async getNotifications() {
    try {
      const methodCrud = await fetch(
        `http://localhost:4000/notifications`
      );

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

  async postNotifications(data: FieldValues) {
    try {
      const methodCrud = await fetch(
        `http://localhost:3000/Notifications_User`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!methodCrud.ok) {
        throw new Error("Error en la peticion");
      }

      const response = await methodCrud.json();

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  //recovery password master
  async recoveryPasswordMaster(data: FieldValues) {
    try {
      const methodCrud = await fetch(`http://localhost:3000/modal`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      const response = await methodCrud.json();

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  //dashboardAdmin
  async getDashboardAdmin() {
    try {
      const methodCrud = await fetch("http://localhost:3000/dashboardAdmin");

      const response = await methodCrud.json();
      return { response };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  //userActivity
  async getUserActivity() {
    try {
      const methodCrud = await fetch("http://localhost:3000/userActivity");
      const response = await methodCrud.json();
      return { response };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  //dashboardIncidents
  async getDashboardIncidents() {
    try {
      const methodCrud = await fetch(
        "http://localhost:3000/dashboardIncidents"
      );
      const response = await methodCrud.json();
      return { response };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  //notificationsAdmin
  async getNotificationsAdmin() {
    try {
      const methodCrud = await fetch("http://localhost:3000/notifications");
      const response = await methodCrud.json();
      return { response };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  //devices
  async getDevices() {
    try {
      const methodCrud = await fetch("http://localhost:3000/devices");
      const response = await methodCrud.json();
      return { response };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  //DashboardAdmin
  async deleteDashboardAdmin(id) {
    try {
      const methodCrud = await fetch(`http://localhost:3000/modal`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(id),
      });
      const response = await methodCrud.json();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  async blockDashboardAdmin(id) {
    try {
      const methodCrud = await fetch(`http://localhost:3000/modal`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(id),
      });
      const response = await methodCrud.json();

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
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
}

export const servicesApp = new Services();
