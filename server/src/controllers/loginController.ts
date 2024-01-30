import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/UsersModel";
import { Op } from "sequelize";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import LoginAttempsModel from '../models/LoginAttempsModel';
import dotenv from 'dotenv';

dotenv.config();

export const login = async (req: Request, res: Response) => {
  const { Name_User, Password_User } = req.body;
  // const error400 = res.status(400).json({ message: "Credenciales Inválidas"});

  if (!Name_User || !Password_User) {
    // return error400;

    return res.status(400).json({ message: "no hay nombre ni usuario en los inputs recogidos"});
  }
1
  let user = await User.findOne({
    where: {
      Name_User: {
        [Op.eq]: Name_User,
        // Email_User:{
        //   [Op.eq]: req.body.Email_User
        // }
      },
    },
  });

  if (!user) {
    return res.status(400).json({ message: "eusuario no encontrado"});
    // return error400;
  }



  const maxAttempts = 5;
  let currentAttempts = user.get("loginAttempts");
  console.log("Current Login Attempts:", currentAttempts);
  // const ObjectInstance = user.get({ plain: true });
  // let currentAttempts = ObjectInstance.LoginAttempts;
  // console.log("Current Login Attempts:", currentAttempts);



  if (typeof currentAttempts === "number" && currentAttempts > maxAttempts) {
    //llevar a pagina de ayuda para contactar porque si pierde el email de desbloqueo...como vuelve a solicitarlo?
   // o reenviar de nuevo el email de desbloqueo?
    // return error400;
    return res.status(400).json({ message: "error en if mayor que 5"});

  }


const PasswordInstance = user.get({ plain: true });
  const isPasswordValid = Password_User === PasswordInstance.Password_User;
  // const isPasswordValid = await bcrypt.compare(
  //   Password_User,
  //   PasswordInstance.Password_User
  // );

  if (!isPasswordValid && typeof currentAttempts === "number" ) {
    user.set("LoginAttempts", currentAttempts + 1);

   await LoginAttempsModel.create({
      //HAY QUE GENERAR EL UUID AUTOMATICAMENTE
      Location: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
      Device: req.headers["user-agent"],
      Sistem_Operative: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
      Date: new Date(),
      // Ip_Direction:,
      Id_User: user,//HAY QUE ENLAZARLO CON EL ID USER
    })


    if (typeof currentAttempts === "number" && currentAttempts == maxAttempts) {

      const secretKey = process.env.SECRET_KEY!;
      const userInstance = user.get({ plain: true });
      const token = jwt.sign(
        {
          Name_User: userInstance.Name_User,
          Location: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
          Date: new Date(),
        },
        secretKey,
        { expiresIn: "1h" }
      );

      const hashedToken = await bcrypt.hash(token, 10);
      user.set("TokenUserLoged", hashedToken);
      user.set("Block_User", true);
      user.set("Location_", req.headers["x-forwarded-for"] || req.socket.remoteAddress);
      user.set("Device_User", req.headers["user-agent"]);
      user.set("Date", new Date());
      await user.save();

      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_ADMIN_Usr,
          pass: process.env.EMAIL_ADMIN_Pss,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_ADMIN_Usr,
        to: userInstance.Email_User,
        subject: "Desbloquea tu cuenta",
        text: `Hemos bloqueado tu usuario por un elevado número de intentos de inicio de sesión sin éxito. Si has sido tú, haz click en este enlace para desbloquear tu cuenta: ${process.env.FRONTEND_URL}/unblock/${token}`,
        //enviar url de edsbloqueo y datos de ubicacion y dispositivo desde donde se bloqueo
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent: ${info.response}`);
        }
      });
      // return error400;
      return res.status(400).json({ message: "error en if igual a 5"});

    }
    return res.status(400).json({ message: "error en if menor que 5 o null???"});
    // return error400;
  }



  if (isPasswordValid) {
    // return res.status(400).json({ message: "passwd valida, hasta aqui"});

    const secretKey = process.env.SECRET_KEY!;
    const userInstance = user.get({ plain: false });
    const token = jwt.sign(
      {
        Name_User: userInstance.Name_User,
        location: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
        // device: req.headers["user-agent"],
        connectionTime: new Date()
        //Ip_Direction:
        //tendremos que enviar el token sin hasear luego compararlo y que verifique que es el

      },
      secretKey,
      { expiresIn: "1h" }
    );

    const tokenExpirydate = new Date();
    tokenExpirydate.setHours(tokenExpirydate.getHours() + 1);

    const hashedToken = await bcrypt.hash(token, 10);
    user.set("loginAttempts", 0) ;
    user.set("TokenLogedUser", hashedToken);
    user.set("ExpiryTokenDate",  tokenExpirydate);
    user.set("Block_User", false) ;
    user.set("device", req.headers["user-agent"]);
    user.set("location", req.headers["x-forwarded-for"] || req.socket.remoteAddress);
    //Ip_Direction:
    user.set("connectionTime", new Date());
    //direccion mac pdt
    await user.save();


    return res.json({ message: "Logged in successfully", accessToken: token });
  };
  return res.status(400).json({ message: "error -- cual es?"});
  // return error400;
}
