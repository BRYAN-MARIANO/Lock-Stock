import express from 'express';
import {  usersGetAllApplicationsByUserId  } from '../controllers/applicationsController'
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware';


const applicationsRouter = express.Router();

applicationsRouter.get('/applications/user', validateTokenMiddleware, usersGetAllApplicationsByUserId);
// applicationsRouter.get('/applications/:id', usersGetByIdApplications);
// applicationsRouter.delete('/applications/:id', usersDeleteApplications);
// applicationsRouter.put('/applications/:id', usersPutApplication); 
// applicationsRouter.get('/applications/',  usersGetApplications);
//applicationsRouter.post('/applications',validateTokenMiddleware, usersPostApplication);







export default applicationsRouter;
