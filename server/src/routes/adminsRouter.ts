import express from 'express';
import {  AdminGetUsersByID, adminPutUsers, adminDeleteUsers } from '../controllers/adminsController';
// import validateMiddelwareUser from '../middlewares/validateMiddelwareUser';


const adminRouter = express.Router();

// adminRouter.get('/admin', validateMiddelwareUser(UserSchema)adminGetUsers);
adminRouter.get('/admin/:id',AdminGetUsersByID);
adminRouter.put('/admin/:id',adminPutUsers);
adminRouter.delete('/admin/:id',adminDeleteUsers);

export default adminRouter;