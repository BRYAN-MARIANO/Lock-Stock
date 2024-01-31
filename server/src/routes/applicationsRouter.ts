import express from 'express';
import { usersGetApplications } from '../controllers/applicationsController';

const applicationsRouter = express.Router();

applicationsRouter.get('/applications/', usersGetApplications);
applicationsRouter.get('/applications/:id', usersGetByIdApplications);
applicationsRouter.delete('/applications/:id', usersDeleteApplications);

//patch, post, delete, get



export default applicationsRouter;