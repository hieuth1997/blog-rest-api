import generateToken from '../commons/helpers/jwtHelper';
import moment from 'moment';
import sendEmailService from '../commons/helpers/sendEmailService';

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
      process.env.ACCESS_TOKEN_SECRET || '793129',
      process.env.TOKEN_LIFE || '1h',
    );
    const accessToken = 'bearer' + token;
    return {
      expiresIn: 3600,
      accessToken,
    };
  },
  async sendRegisterEmail(email) {
    const subject = 'Happy Register';
    const htmlContent = `<div>Hello ${email}.  welcome to my Blog.</div> <p>Click here to learn. </p> <a  target="_blank" href="https://www.globalrealestatelink.com/pages/index">more</a>`;
    return await sendEmailService(email, subject, htmlContent);
  },
};
