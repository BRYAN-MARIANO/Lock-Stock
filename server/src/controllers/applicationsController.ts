import { Request, Response } from "express"
import AplicationsUsersModel from "../models/AplicationsUsersModel";

export const usersGetApplications = async (_req: Request, res: Response) => {
    try {
      // validateTokenMiddleware(req, res, async () => {
      const users = await AplicationsUsersModel.findAll();
      res.status(200).json(users);
      // });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: "Error al obtener las aplicaciones" });
      }
    }
  };

  export const usersGetByIdApplications = async (req: Request, res: Response) => {
    try {
      // validateTokenMiddleware(req, res, async () => {
        const user = await AplicationsUsersModel.findOne({
        where: {
          Id_User: req.params.id,
        },
      });
  
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "error con la aplicación solicitada" });
        return
      }
    // });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
        return
      }
    }
  };
  
  
  export const usersPostApplication = async (req: Request, res: Response) => {
    try {
      const newApplication = await AplicationsUsersModel.create(req.body); // asume que req.body tiene la estructura correcta
      res.status(201).json(newApplication);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }
  };
  
  
  export const usersPutApplication = async (req: Request, res: Response) => {
    console.log("Petición PUT recibida en usersPutApplication con id:", req.params.id, "y body:", req.body);
    try {
      const updatedApplication = await AplicationsUsersModel.update(req.body, {
        where: {
          Id_Applications: req.params.id,
        },
      });
      console.log("Resultado de la actualización:", updatedApplication);
      res.status(200).json({ message: "Aplicación actualizada" });
    } catch (error) {
      console.error("Error en usersPutApplication:", error);
      res.status(500).json({ message: error.message });
    }
};

  
  
export const usersDeleteApplications = async (req: Request, res: Response) => {
  try {
    // validateTokenMiddleware(req, res, async () => {
      await AplicationsUsersModel.destroy({
      where: {
        Id_applications: req.params.id,
      },
    });
    res.status(200).json({ message: "Aplicación eliminada" });
  // });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      return
    }
  }
};
