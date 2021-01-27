import userModel from './users.model';
import BaseError from '../commons/helpers/baseError';
export default {
  async createOne(user) {
    try {
      const newUser = new userModel(user);
      //save in database
      return await newUser.save();
    } catch (error) {
      throw new BaseError({
        statusCode: 422,
        error: 'Email was registered.',
        errors: [error],
      });
    }
  },
  async findOne(userId) {
    const user = await userModel.findById(userId);
    if (user) {
      return user;
    }
    throw new BaseError({ statusCode: 401, error: 'can not find this user' });
  },
  async findOneAndUpdate(id, updatedInfo) {
    const user = await userModel.findById(id);
    console.log(updatedInfo);
    if (updatedInfo.password) {
      let isCorrectPassword = user.comparePassword(updatedInfo.password);
      if (!isCorrectPassword)
        throw new BaseError({
          statusCode: 400,
          error: 'The password is not correct.',
          errors: {
            password: 'The password is not correct .',
          },
        });
      updatedInfo.password = updatedInfo.newPassword;
    }
    Object.assign(user, updatedInfo);
    return await user.save();
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
