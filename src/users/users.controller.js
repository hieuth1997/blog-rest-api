import userService from './users.service';
import BaseResponse from '../commons/helpers/baseResponse';
export default {
  async get(req, res, next) {
    try {
      const { userID } = req.params;
      const user = await userService.findOne(userID);
      if (user && user.active) {
        return new BaseResponse({
          statusCode: 200,
          data: { user: user },
        }).return(res);
      }
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { userId } = req.params;
      const updatedInfo = req.body;
      const user = await userService.findOneAndUpdate(userId, updatedInfo);
      return new BaseResponse({ statusCode: 200, data: { user } }).return(res);
    } catch (error) {
      next(error);
    }
  },
  async upload(req, res, next) {
    try {
      const path = req.file && req.file.path;
      return new BaseResponse({ statusCode: 200, data: { path } }).return(res);
    } catch (error) {
      next(error);
    }
  },
  async approve(req, res, next) {
    try {
      const path = req.file && req.file.path;
      return new BaseResponse({ STATUS: 200, data: { user } }).return(res);
    } catch (error) {
      next(error);
    }
  },
};
