import express from 'express'; // import { Router } from 'express';
import { usersGet, usersGetById, usersPost, usersPut, usersDelete} from '../controllers/usersController';
import validateMiddelwareUser from '../middlewares/validateMiddelwareUser'; // Importar el módulo de validación de datos de usuario
import UserSchema from '../schemas/usersSchema';

const usersRouter = express.Router();

usersRouter.get('/users', usersGet);
usersRouter.get('/users/:id', usersGetById);
usersRouter.post('/users', validateMiddelwareUser(UserSchema),usersPost);
usersRouter.put('/users/:id',  usersPut);
usersRouter.delete('/users/:id', usersDelete);

export default usersRouter;
