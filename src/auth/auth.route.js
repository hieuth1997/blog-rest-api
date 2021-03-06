import express from 'express';
import authController from './auth.controller';
import { isValid } from '../commons/validation/validator';
import { register, login } from './auth.validation';
import { authorize } from './auth.middleware';
const router = express.Router();
router.post('/register', isValid(register), authController.register);
router.post('/login', isValid(login), authController.logIn);
router.get('/profile', authorize, authController.getProfile);
export { router as authRouter };
