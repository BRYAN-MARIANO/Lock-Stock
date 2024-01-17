import express from 'express';
import { applicationsGet } from '../controllers/applicationsController';

const applicationsRouter = express.Router();

applicationsRouter.get('/applications', applicationsGet);
//patch, post, delete, get



export default applicationsRouter;