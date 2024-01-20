import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/UsersModel";
import { Op } from "sequelize";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Error: Try again" });
  }

  let user = await User.findOne({
    where: {
      username: {
        [Op.eq]: username,
      },
    },
  });

  if (!user) {
    return res.status(400).json({ message: "Error: Try again" });
  }
  const PasswordInstance = user.get({ plain: true });
  const isPasswordValid = await bcrypt.compare(
    password,
    PasswordInstance.Password_Master_User
  );
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Error: Try again" });
  }

  const maxAttempts = 5;
  let currentAttempts = user.get("loginAttempts") || 0;

  if (typeof currentAttempts === "number" && currentAttempts >= maxAttempts) {
    user.set("isBlocked", true);
    await user.save();
    
    return res.status(400).json({ message: "Error: Try again" });
  }

  if (currentAttempts === maxAttempts) {
    return res.status(400).json({ message: "Error: Try again" });
  }

  const secretKey = process.env.SECRET_KEY || "";
  const userInstance = user.get({ plain: true });
  // const token = jwt.sign({ username: userInstance.Name_User }, secretKey, { expiresIn: '1h' })
  const token = jwt.sign(
    {
      username: userInstance.Name_User,
      location: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
      device: req.headers["user-agent"],
      connectionTime: new Date(),
    },
    secretKey,
    { expiresIn: "1h" }
  );

  user.set("loginAttempts", 0);
  await user.save();

  return res.json({ message: "Logged in successfully", token });
};
