import Joi from 'joi';
export const register = {
  body: {
    email: Joi.string().email().required().label('Email'),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
      .required()
      .label('Password'),
    rePassword: Joi.string()
      .valid(Joi.ref('password'))
      .label('Confirm password'),
  },
};
export const login = {
  body: {
    email: Joi.string().email().required().label('Email'),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
      .required()
      .label('Password'),
  },
};
