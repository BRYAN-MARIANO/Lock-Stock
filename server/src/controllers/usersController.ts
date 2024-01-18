import { Request, Response } from 'express';
import UsersModel from '../models/UsersModel';
import { v4 as generateUuid } from 'uuid'; // Importar el módulo uuid
import bcrypt from 'bcrypt'; // Importar el módulo bcrypt
import { sign } from 'jsonwebtoken'; // Importar la función sign de jsonwebtoken
import validateMiddelwareUser from '../middlewares/validateMiddelwareUser'; // Importar el módulo de validación de datos de usuario
import 'dotenv/config';

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
        Id_User: req.params.id,
      },
    });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export const usersPost = async (req: Request, res: Response) => {
 try {
   // Validar los datos del usuario
   validateMiddelwareUser(req.body);

   // Generar UUID para el nuevo usuario
   const userUuid = generateUuid();

   // Hashear la contraseña
   const hashedPassword = await bcrypt.hash(req.body.Password_User, 10);

   // Generar el token JWT
   const SECRET_KEY = process.env.SECRET_KEY;
   if (!SECRET_KEY) {
     throw new Error('SECRET_KEY environment variable is not set');
   }
   const token = sign({ userUuid }, SECRET_KEY, { expiresIn: '86400s' });

   // Crear el nuevo usuario en la base de datos
   await UsersModel.create({
     Id_User: userUuid,
     Password_User: hashedPassword,
     Password_Master_User: req.body.Password_User,
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
   });

   // Devolver una respuesta HTTP 201 con el token JWT
   res.status(201).json({ token });
 } catch (error) {
   if (error instanceof Error) {
     res.status(500).json({ message: error.message });
   }
 }
};

export const usersPut = async (req: Request, res: Response) => {
 try {
   // Validar los datos del usuario
   validateMiddelwareUser(req.body);

   // Actualizar el usuario en la base de datos
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
     },
     {
       where: {
         Id_User: req.params.id,
       },
     }
   );

   // Devolver una respuesta HTTP 200
   res.status(200).json({ message: 'Usuario actualizado' });
 } catch (error) {
   if (error instanceof Error) {
     res.status(500).json({ message: error.message });
   }
 }
};

export const usersDelete = async (req: Request, res: Response) => {
 try {
   // Eliminar el usuario de la base de datos
   await UsersModel.destroy({
     where: {
       Id_User: req.params.id,
     },
   });

   // Devolver una respuesta HTTP 200
   res.status(200).json({ message: 'Usuario eliminado' });
 } catch (error) {
   if (error instanceof Error) {
     res.status(500).json({ message: error.message });
   }
 }
};