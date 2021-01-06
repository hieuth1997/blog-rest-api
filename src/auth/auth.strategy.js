import { ExtractJwt, Strategy } from 'passport-jwt';
import userModel from './../users/users.model';

import dotenv from 'dotenv';
dotenv.config();

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET || '793129',
};

const strategy = new Strategy(jwtOptions, async (jwt_payload, done) => {
  try {
    const user = await userModel.findById(jwt_payload.user.sub);
    if (user && user.active) return done(null, user);
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
});

export default strategy;
