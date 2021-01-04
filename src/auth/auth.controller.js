import userService from '../users/users.service';
import BaseResponse from '../commons/helpers/baseResponse';
import BaseError from '../commons/helpers/baseError';
export default {
  async register(req, res, next) {
    try {
      const newUser = req.body;
      const user = await userService.createOne(newUser);
      if (user) {
        return new BaseResponse({
          statusCode: 200,
          data: { message: 'create success user.', user },
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
      if (user && user.active && comparePassword(password)) {
        return new Response({
          statusCode: 200,
          data: { message: 'login successfully', user },
        }).return(res);
      }
    } catch (error) {
      next(error);
    }
  },
};
