import express from 'express';
import { adminGetUsers, AdminGetUsersByID, adminPutUsers, adminDeleteUsers } from '../controllers/adminsController';


const adminRouter = express.Router();

adminRouter.get('/admin',adminGetUsers);
adminRouter.get('/admin/:id',AdminGetUsersByID);
adminRouter.put('/admin/:id',adminPutUsers);
adminRouter.delete('/admin/:id',adminDeleteUsers);

export default adminRouter;