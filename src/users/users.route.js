import express from 'express';
import userController from './users.controller';
import { isValid } from '../commons/validation/validator';
import { get } from './users.validation';
import { uploadPictureMiddleware } from '../commons/middlewares/upload';
const router = express.Router();
router.get('/:userId', isValid(get), userController.get);
router.post('picture', uploadPictureMiddleware);
export { router as userRouter };
