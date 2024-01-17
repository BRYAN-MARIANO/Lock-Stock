import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import UsersModel from "../models/UsersModel";
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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





export const usersPost = async (req: Request, res: Response) => {
    try {
      const {
        Password_User,
        Password_Master_User,
        Email_User,
        Name_User,
        SurName_User,
        Mobile_User,
        Question_Security_User,
        Answer_Security_User,
        Device_User,
        Notifications_User,
        Block_User,
        Delete_User,
      } = req.body;
  
      const existingUser = await UsersModel.findOne({
        where: { Email_User },
      });
  
      if (existingUser) {
        return res.status(400).json({ message: 'Ya existe un usuario con este correo electrónico.' });
      }
  
      const userUuid = uuidv4();
  
      let password = await bcrypt.hash(Password_User, 10);
  
      const SECRET_KEY = process.env.SECRET_KEY;
      
      
      if (!SECRET_KEY) {
        throw new Error('SECRET_KEY environment variable is not set');
      }
  
      const token = jwt.sign({ id: userUuid }, SECRET_KEY, {
        expiresIn: 86400,
      });
  
      
    await UsersModel.create({
        Id_User: userUuid,
        Password_User: password,
        Password_Master_User,
        Email_User,
        Name_User,
        SurName_User,
        Mobile_User,
        Question_Security_User,
        Answer_Security_User,
        Device_User,
        Notifications_User,
        Block_User,
        Delete_User,
      });
  
      return res.status(201).json({ token });
  
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
      return;
    }
  };
  