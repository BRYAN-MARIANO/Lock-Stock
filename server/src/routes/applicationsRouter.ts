import express from 'express';
import { applicationsGet, usersGetApplications } from '../controllers/applicationsController';

const applicationsRouter = express.Router();

applicationsRouter.get('/applications', applicationsGet);
applicationsRouter.get('/users',usersGetApplications);

//patch, post, delete, get



export default applicationsRouter;