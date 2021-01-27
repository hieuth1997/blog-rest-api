import userService from '../users/users.service';
import BaseResponse from '../commons/helpers/baseResponse';
import BaseError from '../commons/helpers/baseError';
import authService from './auth.service';
import { get } from 'mongoose';
export default {
  async register(req, res, next) {
    try {
      const newUser = req.body;
      const user = await userService.createOne(newUser);
      if (user) {
        const { email, active } = user;
        //  await authService.sendRegisterEmail(email);
        const customUser = { email, active };
        return new BaseResponse({
          statusCode: 200,
          data: { message: 'create success user.', user: customUser },
        }).return(res);
      }
    } catch (error) {
      next(error);
    }
  },
  async logIn(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await userService.findByEmail(email);
      const isRightPassword = await user.comparePassword(password);
      let token = await authService.createToken(user._id, user.role);
      console.log(isRightPassword);
      if (user && user.active && isRightPassword) {
        const { _id, active, email, firstName, lastName } = user;
        const userName = { firstName, lastName };
        const customUser = { _id, active, email, name: userName };
        return new BaseResponse({
          statusCode: 200,
          data: { message: 'login successfully', user: customUser, token },
        }).return(res);
      }
    } catch (error) {
      next(
        new BaseError({
          statusCode: 401,
          error: 'incorrect email or password',
          errors: [error],
        }),
      );
    }
  },
  async getProfile(req, res, next) {
    try {
      if (req.user) {
        return new BaseResponse({
          statusCode: 200,
          data: { user: req.user.transform() },
        }).return(res);
      }
    } catch (error) {
      next(error);
    }
  },
};
