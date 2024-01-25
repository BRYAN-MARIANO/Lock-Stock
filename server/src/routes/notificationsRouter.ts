import express from 'express';
import { usersGetNotifications } from '../controllers/notificationsController';

const notificationsRouter = express.Router();

notificationsRouter.get('/users/id:/notifications', usersGetNotifications);

//get, delete, post


export default notificationsRouter;