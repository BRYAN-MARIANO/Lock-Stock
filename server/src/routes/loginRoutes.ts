import express from 'express';
import * as LoginController from '../controllers/loginController';
import * as unblockController from "../controllers/loginUnblockController";


const router = express.Router();

router.post('/login', LoginController.login);
router.get("/unblock/:token", unblockController.unblock)

export default router;