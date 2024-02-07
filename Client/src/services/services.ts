import { FieldValues } from "react-hook-form";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL; 

class Services {
  constructor() {}
  async getUserInfo(id: string) {
    try {
      const methoudCrud = await fetch(`${BACKEND_URL}users/${id}`);
      const response = await methoudCrud.json();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
  async recoverPassword(formData: FieldValues) {
    try {
      const methoudCrud = await fetch(`${BACKEND_URL}recover`, { // Asegúrate de ajustar la ruta según corresponda
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const response = await methoudCrud.json();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`message: ${error.message}`);
      }
    }
  }
  async getAccountsUser() {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        throw new Error("No se encontró el token de autenticación");
      }
      const idUser = localStorage.getItem('userId');
      const methoudCrud = await fetch(`${BACKEND_URL}applications/${idUser}`, {
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
      return { response };
    } catch (error) {
      console.error("Error en getAccountsUser:", error);
      throw error;
    }
  }
  async updateUserProfile(data: FieldValues, userId: string, token: string) {
    try {
      const response = await fetch(`${BACKEND_URL}users/${userId}`, {
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
  async putAccountUser(id: string, data: FieldValues) {
    try {
      const methodCrud = await fetch(`${BACKEND_URL}applications/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!methodCrud.ok) {
        throw new Error("Error en la petición");
      }
      const response = await methodCrud.json();
      return { response };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
  async postApplication(data: FieldValues, id: string) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Authentication token not found');
    }
    try {
      const response = await fetch(`${BACKEND_URL}applications/${id}`, {
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
  async login(credentials: FieldValues): Promise<string | void> {
    try {
      console.log('Sending login request with credentials:', credentials);
      const response = await fetch(`${BACKEND_URL}login`, {
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
      localStorage.setItem('userId', data.userId);
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        console.log('Access token stored in localStorage');
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
      const response = await fetch(`${BACKEND_URL}users`, {
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
  async postModal(data: FieldValues) {
    try {
      const methodCrud = await fetch(`${BACKEND_URL}modal`, { // Asegúrate de que esta ruta es correcta
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!methodCrud.ok) {
        throw new Error("Error con la contraseña");
      }
      const response = await methodCrud.json();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
  async postPasswordMaster(id: string, data: FieldValues) {
    try {
      const methoudCrud = await fetch(`${BACKEND_URL}users/master/${id}`, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      const response = await methoudCrud.json();
      console.log(response.message);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
}
export const servicesApp = new Services();