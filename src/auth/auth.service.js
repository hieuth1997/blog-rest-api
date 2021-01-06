import generateToken from '../commons/helpers/jwtHelper';
import moment from 'moment';

export default {
  async createToken(_id, role) {
    const user = {
      sub: _id,
      role: role,
      exp: moment().add(process.env.ACCESS_TOKEN_LIFE, 's').unix(),
      iat: moment().unix(),
    };
    const token = await generateToken(
      user,
      process.env.ACCESS_TOKEN_SECRET,
      '1h',
    );
    const accessToken = 'bearer' + token;
    return {
      expiresIn: 3600,
      accessToken,
    };
  },
};
