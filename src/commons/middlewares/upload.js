import multer from 'multer';
import fs from 'fs';
import mkdirp from 'mkdirp';
import { includes } from 'lodash';
import BaseError from '../helpers/baseError';
import { extname } from 'path';
import slugify from 'slugify';
const DIRCONTRACT = `uploads/contracts`;
const DIRSINGLE = `uploads/single/`;
const DIRNEWS = `uploads/newss/`;

const storage = (dir) => {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      !fs.existsSync(dir)
        ? mkdirp(dir, (err) => !err && cb(null, dir))
        : cb(null, dir);
    },
    filename: function (req, file, cb) {
      const orFileName = file.originalname
        .replace(extname(file.originalname), '')
        .toLowerCase();
      const fileName = `realestatelink-${new Date().getTime()}.${slugify(
        orFileName.slice(0, 5),
      )}${extname(file.originalname)}`;
      cb(null, fileName);
    },
  });
};
const fileFilter = (dir) =>
  function (req, file, cb) {
    let allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png'];
    if (dir === DIRCONTRACT)
      allowedMimes.push(
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      );
    if (includes(allowedMimes, file.mineType)) {
      cb(null, true);
    } else {
      cb(
        new BaseError({
          statusCode: 400,
          errors: { picture: 'images format invalid' },
        }),
      );
    }
  };
const upload = (dir) =>
  multer({
    limits: { fileSize: 1024 * 1024 * 100 },
    storage: storage(dir),
    fileFilter: fileFilter(dir),
  });
export const uploadPictureMiddleware = upload(DIRSINGLE).single('picture');
export const uploadNewsMiddleware = upload(DIRNEWS).single('picture');
export const uploadContract = upload(DIRCONTRACT).single('contract');
