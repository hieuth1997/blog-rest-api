import express from 'express';
import newsController from './news.controller';
import { authorize, isAdmin } from '../auth/auth.middleware';
import { uploadNewsMiddleware } from '../commons/middlewares/upload';
import { isValid } from '../commons/validation/validator';
import {
  createNews,
  updateNews,
  get,
  getBySlug,
  getById,
  remove,
} from './news.validation';
import { resize } from '../commons/middlewares/resize';

const router = express.Router();

router.post(
  '/',
  authorize,
  isAdmin,
  isValid(createNews),
  newsController.create,
);
router.post(
  '/image',
  authorize,
  isAdmin,
  uploadNewsMiddleware,
  resize,
  newsController.upload,
);
router.get('/item/:slug', isValid(getBySlug), newsController.getBySlug);
router.get('/', isValid(get), newsController.find);
router.get(
  '/admin',
  authorize,
  isAdmin,
  isValid(get),
  newsController.adminFind,
);
router.get('/:newsId', isValid(getById), newsController.getById);
router.put(
  '/:newsId',
  authorize,
  isAdmin,
  isValid(updateNews),
  newsController.update,
);
router.delete(
  '/:newsId',
  authorize,
  isAdmin,
  isValid(remove),
  newsController.delete,
);

export { router as newsRouter };
