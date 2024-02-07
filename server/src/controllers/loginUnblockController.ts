import { Request, Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import User from "../models/UsersModel"


export const unblock = async (req: Request, res: Response) => {
  const { token } = req.params;
  const error400 = res.status(400).json({ message: "Error: Try again" })

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!) as JwtPayload;
    if (decoded.isUnblock !== true) {
      return error400;
    }

    const user = await User.findOne({
      where: {
        token: token,
        isBlocked: true,
        location: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
      },
    });
    if (!user) {
      return error400;
    }
// guardar fecha. ubicacion y dispositivo dede el que se ha desbloqueado
    user.set("isBlocked", false);
    user.set("loginAttempts", 0);
    await user.save();

    return res.json({ message: "User unblocked successfully" })
  } catch (error) {
    return error400;
  }
}