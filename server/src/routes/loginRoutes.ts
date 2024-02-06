import express from 'express';
import * as loginUnblockController from "../controllers/loginUnblockController";
//import LoginAttempsSchema from '../schemas/loginAttempsSchema';
import { login } from '../controllers/loginController';
//import validateLoginMiddelware from '../middlewares/validateLoginMiddelware';


const router = express.Router();

router.post('/login',/* validateLoginMiddelware(LoginAttempsSchema)*/ login);
router.get("/unblock/:token", loginUnblockController.unblock)

export default router;

