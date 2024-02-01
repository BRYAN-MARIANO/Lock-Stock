import { Request, Response } from "express";
import User from "../models/UsersModel";
import { Op } from "sequelize";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import LoginAttemptsModel from "../models/LoginAttempsModel";
import { ILoginAttempt } from "../../loginAttempsInterface"; // Asumiendo que tienes un archivo de interfaces
import { v4 as generateUuid } from 'uuid';
import { UserInterface } from "../../userInterface"; // Asume que tienes una interfaz de usuario definida

export const login = async (req: Request, res: Response) => {
  const { Name_User, Password_User } = req.body;
  const error400 = () => res.status(400).json({ message: "Credenciales Inválidas" });

  if (!Name_User || !Password_User) {
    return error400();
  }

  let user = await User.findOne({
    where: { Name_User: { [Op.eq]: Name_User } },
  }) as UserInterface | null;

  if (!user) {
    console.log("Usuario no encontrado");
    await createLoginAttempt(null,  req); // Falso indica que el intento es fallido
    return error400();
  }

  // Afirmamos que el tipo de 'user' es 'UserInterface' después de verificar que no es nulo
  const userTyped = user!.get() as UserInterface;

  const isPasswordValid = await bcrypt.compare(Password_User, userTyped.Password_User);
  console.log("Contraseña válida:", isPasswordValid);
  if (!isPasswordValid) {
    const maxAttempts = 5;
    await user.increment('loginAttempts') as UserInterface;
    await user.reload()  as UserInterface;
    console.log("Intentos de login después de incrementar:", userTyped.loginAttempts);


    await createLoginAttempt(userTyped.Id_User,  req);

    if (userTyped.loginAttempts >= maxAttempts) {
      // Lógica para bloquear al usuario y enviar email
      // ...
    }

    return error400();
  }

  if (isPasswordValid) {
    // Resetea los intentos fallidos si el inicio de sesión es exitoso
    await user.update({ loginAttempts: 0 })  as UserInterface ;

    // Genera y guarda el token de sesión
    const secretKey = process.env.SECRET_KEY!;
    const token = jwt.sign({
      Name_User: user.Name_User,
      location: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
      device: req.headers["user-agent"],
      connectionTime: new Date(),
    }, secretKey, { expiresIn: "1h" });

    const hashedToken = await bcrypt.hash(token, 10);
    const location = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const locationString = Array.isArray(location) ? location.join(", ") : location;
    await user.update({
      hashedToken,
      location: locationString,
      device: req.headers["user-agent"],
      connectionTime: new Date(),
    });

    return res.json({ message: "Logged in successfully", token });
  }

  return error400();
};

async function createLoginAttempt(userId: string | null, req: Request): Promise<void> {
  console.log("Creando intento de login para usuario:", userId);
  let ipDirection: number | undefined = undefined;
  if (req.socket.remoteAddress) {
    ipDirection = parseInt(req.socket.remoteAddress, 10);
    ipDirection = isNaN(ipDirection) ? undefined : ipDirection;
  }

  const loginAttemptData: ILoginAttempt = {
    Id_AttempLogin: generateUuid(),
    Location: typeof req.headers["x-forwarded-for"] === 'string' 
      ? req.headers["x-forwarded-for"] 
      : req.socket.remoteAddress as string,
    Device: req.headers["user-agent"] as string,
    DateLoginError: new Date(),
    Ip_Direction: ipDirection,
    Id_User: userId ?? 'default-user-id', // Utiliza un ID de usuario predeterminado o maneja el caso 'null' según la lógica de tu aplicación
    // Si tienes
  };

  await LoginAttemptsModel.create(loginAttemptData as any); // Ya no necesitas 'as any' si la interfaz coincide con el modelo
}
