import express from 'express';
import { devicesGet } from '../controllers/devicesController';

const devicesRouter = express.Router();

devicesRouter.get('/devices', devicesGet);
//get, post, delete



export default devicesRouter;