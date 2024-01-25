import express from 'express';
import { adminGetUsers, adminGetUsersByID, adminPutUsers, adminDeleteUsers } from '../controllers/adminsController';
import validateMiddelwareUser from '../middlewares/validateMiddelwareUser';
import UserSchema from '../schemas/usersSchema';


const adminRouter = express.Router();

adminRouter.get('/admin', adminGetUsers);
adminRouter.get('/admin/:id', adminGetUsersByID);
adminRouter.put('/admin/:id', validateMiddelwareUser(UserSchema), adminPutUsers);
adminRouter.delete('/admin/:id', adminDeleteUsers);

export default adminRouter;