import passport from 'passport';
import BaseResponse from '../commons/helpers/baseResponse';

const authorize = passport.authenticate('jwt', { session: false });

const isAdmin = (req, res, next) => {
  if (req.user.role === 'admin') {
    return next();
  }
  return new BaseResponse({ statusCode: 401, data: 'unauthorized' });
};
const isSeller = (req, res, next) => {
  if (req.user.role === 'seller') {
    return next();
  }
  return new BaseResponse({ statusCode: 401, data: 'unauthorized' });
};
export { authorize, isSeller, isAdmin };
