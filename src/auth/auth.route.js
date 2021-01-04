import express from 'express';
import authController from './auth.controller';
import { isValid } from '../commons/validation/validator';
import { register, login } from './auth.validation';
const router = express.Router();
router.get('/register', authController.get);
router.post('/register', isValid(register), authController.register);
router.post('/login', isValid(login), authController.logIn);
export { router as authRouter };
