import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import UsersModel from "../models/UsersModel";

const validateTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];
    console.log('Token recibido:', token); // Agregar este console.log para ver el token

    if (!token) {
      console.log('Token ausente. Respuesta 401.');
      return res.status(401).json({ message: "Authentication token is missing." });
    }

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY as string);
    console.log('Token decodificado:', decodedToken); // Agregar este console.log para ver el token decodificado

    const userId = (decodedToken as jwt.JwtPayload).Id_User;
    console.log('ID de usuario extraído del token:', userId); // Agregar este console.log para ver el ID de usuario

    const user = await UsersModel.findOne({
      where: { Id_User: userId },
    });

    if (!user) {
      console.log('Usuario no encontrado. Respuesta 404.');
      return res.status(404).json({ message: "User not found." });
    }

    // Agregar información del usuario al objeto de solicitud
    // Suponiendo que la interfaz de usuario tenga una propiedad Id_User
    (req as any).user = user; // Utilizamos "as any" para evitar conflictos de tipos

    console.log('Middleware de validación de token exitoso. Continuando.');
    next(); // Pasar al siguiente middleware/controlador
  } catch (error) {
    console.error('Error en el middleware de validación de token:', error);

    if (error instanceof jwt.JsonWebTokenError) {
      console.log('Error de token JWT. Respuesta 401.');
      return res.status(401).json({ message: "Invalid or expired token." });
    } else {
      console.log('Error interno del servidor. Respuesta 500.');
      return res.status(500).json({ message: "Internal server error." });
    }
  }
};
 export default validateTokenMiddleware;
