import express from 'express';
import * as LoginController from '../controllers/loginController';

const router = express.Router();

router.post('/login', LoginController.login);

export default router;