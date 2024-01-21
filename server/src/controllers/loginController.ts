import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/UsersModel";
import { Op } from "sequelize";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const error400 = res.status(400).json({ message: "Credenciales Inválidas"});

  if (!username || !password) {
    return error400;
  }

  let user = await User.findOne({
    where: {
      username: {
        [Op.eq]: username,
      },
    },
  });

  if (!user) {
    return error400;
  }

  const PasswordInstance = user.get({ plain: true });
  const isPasswordValid = await bcrypt.compare(
    password,
    PasswordInstance.Password_User
  );

  if (!isPasswordValid) {
    const maxAttempts = 5;
    //almacwenar datos como fecha, dispositivo, direcc IP, desde donde intentó conectarse sin exito
    let currentAttempts = user.get("loginAttempts" + 1);
    await user.save();
    
    // -------- start block -------- 
    if (typeof currentAttempts === "number" && currentAttempts >= maxAttempts) {
      user.set("isBlocked", true);
      await user.save();

      const secretKey = process.env.SECRET_KEY!;  
      const userInstance = user.get({ plain: true });
      const token = jwt.sign(
        {
          username: userInstance.Name_User,
          isUnblock: true,
        },
        secretKey,
        { expiresIn: "1h" }
      );
      //almacenar +1 veces bloqueado a este usuario + fecha + dispositivo desde el que lo bloqueo + direccion Ip + fecha y hora + ..
      await user.save();  


      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER_BLOCK,
          pass: process.env.EMAIL_PASS_BLOCK,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER_BLOCK,
        to: userInstance.Email_User,
        subject: "Desbloquea tu cuenta",
        text: `Hemos bloqueado tu usuario por un elevado número de intentos de inicio de sesión sin éxito. Si has sido tú, haz click en este enlace para desbloquear tu cuenta: ${process.env.FRONTEND_URL}/unblock/${token}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent: ${info.response}`);
        }
      });
      return error400;
    }
    return error400;
  }
  // ------- end block ------- 

  if (isPasswordValid) {
    const secretKey = process.env.SECRET_KEY!; 

    const userInstance = user.get({ plain: false });
    const token = jwt.sign(
      {
        username: userInstance.Name_User,
        location: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
        device: req.headers["user-agent"],
        connectionTime: new Date(),
      },
      secretKey,
      { expiresIn: "1h" }
    );

    //***guardar cada dato en su tabla correspondiente? y que pasen por el modelo y 
    const hashedToken = await bcrypt.hash(token, 10);
    user.set("hashedToken", hashedToken);
    user.set("location", req.headers["x-forwarded-for"] || req.socket.remoteAddress);
    user.set("device", req.headers["user-agent"]);
    user.set("connectionTime", new Date());
    user.set("loginAttempts", 0);
    await user.save();
    
    

    return res.json({ message: "Logged in successfully", token });
  };
  return error400;
}
