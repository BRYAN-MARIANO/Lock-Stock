import { Request, Response } from "express"
import DevicesUsersModel from "../models/DevicesUserModel";

export const usersGetDevices = async (_req: Request, res: Response) => {
    try {
      const users = await DevicesUsersModel.findAll();
      res.status(200).json(users);

    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: "Error al obtener los dispositivos" });
      }
    }
  };
  
  export const usersGetByIdDevices = async (req: Request, res: Response) => {
    try {
        const user = await DevicesUsersModel.findOne({
        where: {
          Id_User: req.params.id,
        },
      });
  
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "error con el dispositivo solicitado" });
        return
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
        return
      }
    }
  };
  
  
export const usersDeleteDevices = async (req: Request, res: Response) => {
  try {
      await DevicesUsersModel.destroy({
      where: {
        Id_applications: req.params.id,
      },
    });
    res.status(200).json({ message: "Dispositivo eliminado" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      return
    }
  }
};
