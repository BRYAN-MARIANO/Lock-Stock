import express from 'express';
import { usersGetNotifications } from '../controllers/notificationsController';
import { NotificationsSchema } from '../schemas/notificationsSchema';
import validateNotificationsMiddelware from '../middlewares/validateNotificationsMiddelware';
const notificationsRouter = express.Router();

notificationsRouter.get('/notifications/id:', validateNotificationsMiddelware(NotificationsSchema), usersGetNotifications);
//get, delete, post


export default notificationsRouter;