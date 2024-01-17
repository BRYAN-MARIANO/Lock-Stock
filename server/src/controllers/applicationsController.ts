import { Request, Response } from "express"
import AplicationsUsersModel from "../models/AplicationsUsersModel";


export const applicationsGet = async (_req: Request, res: Response)=>{
    try {
    const applications = await AplicationsUsersModel.findAll();
    res.status(200).json(applications);   
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });      
          } 
    }
}