import express from 'express'; 

import { userPostMaster } from '../controllers/passwordMasterController';


const masterRouter = express.Router();



masterRouter.post('/master/:id' ,userPostMaster);



export default masterRouter;