import express from 'express';
import {  usersDeleteApplication, usersGetAllApplicationsByUserId, usersPostApplication, usersPutApplication  } from '../controllers/applicationsController'
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware';


const applicationsRouter = express.Router();

applicationsRouter.get('/applications/:Id_User', validateTokenMiddleware, usersGetAllApplicationsByUserId);







applicationsRouter.delete('/applications/:Id_User', usersDeleteApplication);

applicationsRouter.put('/applications/:id', usersPutApplication); 






applicationsRouter.post('/applications/:Id_User', usersPostApplication);







export default applicationsRouter;
