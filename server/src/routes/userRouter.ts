import express from 'express';
import { usersGet, usersPost } from '../controllers/usersController';
import { validationMiddleware } from '../middlewares/validationMiddleware';
import UserSchema from '../schemas/usersSchema';

const usersRouter = express.Router();

usersRouter.get('/users', usersGet);
usersRouter.post('/users', validationMiddleware(UserSchema),usersPost);

//get, post, patch


export default usersRouter;