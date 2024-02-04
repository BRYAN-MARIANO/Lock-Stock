import express from 'express';
import { usersDeleteApplications, usersGetApplications, usersGetByIdApplications, usersPostApplication, usersPutApplication } from '../controllers/applicationsController';


const applicationsRouter = express.Router();

applicationsRouter.post('/applications/', usersPostApplication); 
applicationsRouter.put('/applications/:id', usersPutApplication); 
applicationsRouter.get('/applications/', usersGetApplications);
applicationsRouter.get('/applications/:id', usersGetByIdApplications);
applicationsRouter.delete('/applications/:id', usersDeleteApplications);




export default applicationsRouter;
