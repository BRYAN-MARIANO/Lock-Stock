import express from 'express'; 
import { usersGetById, usersRegisterPost, usersPut } from '../controllers/usersController';
import validateUserMiddelware from '../middlewares/validateUserMiddelware';
import UserSchema from '../schemas/usersSchema';

const usersRouter = express.Router();

usersRouter.get('/users/:id', usersGetById);
usersRouter.post('/users', validateUserMiddelware(UserSchema), usersRegisterPost);
usersRouter.put('/users/:id', validateUserMiddelware(UserSchema), usersPut);

export default usersRouter;

