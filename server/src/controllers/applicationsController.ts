import { NextFunction, Request, Response } from "express";
import UsersModel from "../models/UsersModel";
import { v4 as generateUuid } from "uuid";
import "dotenv/config";
import { UserInterface } from '../interfaces/userInterface';
import AplicationsUsersModel from "../models/AplicationsUsersModel";



export const usersGetAllApplicationsByUserId = async (req: Request, res: Response) => {
  try {

    const { Id_User } = req.params;

    console.log('el id del usuario es:', Id_User)

    const applications = await AplicationsUsersModel.findAll({
      where: { Id_User: Id_User },
    });

    console.log("respuesta de aplicaciones", applications)
    res.status(200).json(applications);
  } catch (error) {

    res.status(500).json({ message: "Error al obtener las aplicaciones del usuario" });

  }
};





export const usersGet = async (_req: Request, res: Response) => {
  try {
    const users = await UsersModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
export const usersGetById = async (req: Request, res: Response) => {
  try {
    const user = await UsersModel.findOne({
      where: {
        Id_User:
req.params.id
,
      },
    }) as UserInterface | null;
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Credenciales Inválidas" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};






export const usersPostApplication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    

    const { Id_User } = req.params;

    console.log(Id_User)

    const existingUser = await UsersModel.findOne({
      where: {
        Id_User: Id_User,
      },
    })

    console.log('este es el usuarioooooooooooooooooooo', existingUser)

 
    const userUuid = generateUuid();


    const { Name_Aplication, Email_Aplication, Password_Aplication }= req.body


    console.log('este es mi uuuidddddd',userUuid)
    console.log('este es el nombre', Name_Aplication)
    console.log('este es el email', Email_Aplication)
    console.log('este es el contraseña', Password_Aplication)
    console.log('este id del usuario', Id_User)

    if (userUuid && Name_Aplication && Email_Aplication && Password_Aplication && Id_User) {
      const info = await AplicationsUsersModel.create({
        Id_Aplications: userUuid,
        Name_Aplication: Name_Aplication,
        Email_Aplication: Email_Aplication,
        Category_Aplication: 'categoria',
        Password_Aplication: Password_Aplication,
        Id_User: Id_User
      });
    
    
      console.log('informacion del create', info)
      console.log('hola mundooooooooooooooooooooooooooooooooooooooooo')
    
        res.status(201).json({ message: "aplicacion creada" });
    
    }

     
    } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};









export const usersPutApplication = async (req: Request, res: Response) => {
  try {
   // validateMiddelwareUser(req.body); comentado para desactivar temporalmente el middlware, al igual que en la ruta y el propio controlador
    await UsersModel.update(
      {
        Email_User: req.body.Email_User,
        Name_User: req.body.Name_User,
        SurName_User: req.body.SurName_User,
        Mobile_User: req.body.Mobile_User,
        Question_Security_User: req.body.Question_Security_User,
        Answer_Security_User: req.body.Answer_Security_User,
        Device_User: req.body.Device_User,
        Notifications_User: req.body.Notifications_User,
        Block_User: req.body.Block_User,
        Delete_User: req.body.Delete_User,
        //añadir fecha de modificación/envío/conexión
        //añadir ubicación de modificación/envío/conexión
      },
      {
        where: {
          Id_User:
req.params.id
,
        },
      }
    );
    res.status(200).json({ message: "Usuario actualizado" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};



export const usersDeleteApplication = async (req: Request, res: Response) => {
  try {
    await UsersModel.destroy({
      where: {
        Id_User:
req.params.id
,
      },
    });
    res.status(200).json({ message: "Usuario eliminado" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};