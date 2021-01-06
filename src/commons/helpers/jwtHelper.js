import jwt from 'jsonwebtoken';
/**
 *
 * @param {*} user data want to save json
 * @param {*} secretSignature secure
 * @param {*} tokenLife the time token life
 */
const generateToken = (user, secretSignature, tokenLife) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { data: user },
      secretSignature,
      {
        algorithm: 'HS256',
        expiresIn: tokenLife,
      },
      (error, token) => {
        if (error) {
          return reject(error);
        }
        resolve(token);
      },
    );
  });
};
export default generateToken;
