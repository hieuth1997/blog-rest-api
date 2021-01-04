import userModel from './users.model';
import BaseError from '../commons/helpers/baseError';
export default {
  async createOne(user) {
    try {
      const newUser = new userModel(user);
      //save in database
      return await newUser.save();
    } catch (error) {
      console.log(error);
      throw new BaseError({
        statusCode: 422,
        error: 'Email was registered.',
      });
    }
  },
  async findByEmail(email) {
    const user = await userModel.findOne({ email: email });
    if (user) {
      return user;
    }
    throw new BaseError({
      statusCode: 401,
      error: 'Email or password incorrect',
    });
  },
};
