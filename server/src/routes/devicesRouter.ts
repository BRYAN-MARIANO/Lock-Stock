import express from 'express';
import { usersDeleteDevices, usersGetByIdDevices, usersGetDevices } from '../controllers/devicesController';

const devicesRouter = express.Router();

devicesRouter.get('/devices', usersGetDevices);
devicesRouter.get('/devices/:id', usersGetByIdDevices);
devicesRouter.delete('/devices/:id', usersDeleteDevices);

//get, post, delete



export default devicesRouter;