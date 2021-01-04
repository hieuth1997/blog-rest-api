import Joi from 'joi';
const isValid = (option) => (req, res, next) => {
  // convert key object to array

  let types = Object.keys(option);
  let errors = {};
  types.forEach((type) => {
    let result = Joi.validate(req[type], option[type]);
    if (result.error) {
      console.log(result.error);
      result.error.details.forEach((err) => {
        errors[err.path[0]] = err.message;
      });
    }
  });
  if (Object.keys(errors).length)
    throw new BaseError({ statusCode: 400, errors });
  next();
};
export { isValid };
