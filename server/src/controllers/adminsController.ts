import { Request, Response } from "express";
import AdminModel from "../models/AdminModel";

export const adminsGet = async (_req: Request, res: Response) => {
  try {
    const admins = await AdminModel.findAll();

    res.status(200).json(admins);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

