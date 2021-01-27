import express from 'express';
const router = express.Router();
import { authRouter } from './auth/auth.route';
import { authorize } from './auth/auth.middleware';
import { userRouter } from './users/users.route';

router.use('/auth', authRouter);
router.use('/user', authorize, userRouter);
router.use('/news', newsRouter);
export default router;
