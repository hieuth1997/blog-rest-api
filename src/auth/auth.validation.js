import Joi from '@hapi/joi';
export const register = {
  body: {
    email: Joi.string().email().required().label('email'),
    password: Joi.string().min(6).required().label('Password'),
    rePassword: Joi.string()
      .valid(Joi.ref('password'))
      .required()
      .label('Confirm password'),
  },
};
export const login = {
  body: {
    email: Joi.string().email().required().label('email'),
    password: Joi.string().min(3).required().label('Password'),
  },
};
