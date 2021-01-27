import Joi from '@hapi/joi';
export const get = {
  params: {
    userId: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/, { name: 'object id' })
      .required(),
  },
};
export const update = {
  body: {
    name: Joi.string().min(3).max(64).label('Full Name'),
    password: Joi.string().min(6).max(32).label('The old password'),
    newPassword: Joi.string()
      .min(6)
      .max(32)
      .label('The new password')
      .when('password', {
        is: Joi.exist(),
        then: Joi.required().invalid(Joi.ref('password')),
      }),
    reNewPassword: Joi.string()
      .min(6)
      .max(32)
      .label('Confirm new password')
      .when('reNewPassword', {
        is: Joi.exist(),
        then: Joi.required().valid(Joi.ref('newPassword')),
      }),
    gender: Joi.string().valid(['male', 'female', 'other']),
    address: Joi.string().max(256),
    picture: Joi.string().trim(),
  },
};
