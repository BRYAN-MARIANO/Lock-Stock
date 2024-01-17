import express from 'express';
import { adminsGet } from '../controllers/adminsController';


const adminRouter = express.Router();

adminRouter.get('/admins',adminsGet);
//post, get, patch, delete 




export default adminRouter;