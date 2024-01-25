import { Request, Response } from "express";
import UsersModel from "../models/UsersModel";

import validateMiddelwareUser from "../middlewares/validateMiddelwareUser";


export const adminGetUsers = async (_req: Request, res: Response) => {
  try {
    const admins = await UsersModel.findAll();
    res.status(200).json(admins);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};


export const AdminGetUsersByID = async (req: Request, res: Response) => {
  try {

    const user = await UsersModel.findOne({
      where: {
        Id_User: req.params.id,
      },
    });
    
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


export const adminPutUsers = async (req: Request, res: Response) => {
  try {
    validateMiddelwareUser(req.body);
    
    await UsersModel.update(
      {
        Notifications_User: req.body.Notifications_User,
        Block_User: req.body.Block_User,
      },
      {
        where: {
          Id_User: req.params.id,
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
  
  export const adminDeleteUsers = async (req: Request, res: Response) => {
  try {
 
    await UsersModel.destroy({
      where: {
        Id_User: req.params.id,
      },
    });

    res.status(200).json({ message: "Usuario eliminado" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};


