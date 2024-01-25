import express from 'express'; 
import { usersGetById, usersRegisterPost, usersPut, usersDelete} from '../controllers/usersController';
import validateMiddelwareUser from '../middlewares/validateMiddelwareUser';
import UserSchema from '../schemas/usersSchema';

const usersRouter = express.Router();

usersRouter.get('/users/:id', usersGetById);
usersRouter.post('/users', validateMiddelwareUser(UserSchema), usersRegisterPost);
usersRouter.put('/users/:id', validateMiddelwareUser(UserSchema), usersPut);
usersRouter.delete('/users/:id', validateMiddelwareUser(UserSchema), usersDelete);

export default usersRouter;

