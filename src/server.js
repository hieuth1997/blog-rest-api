import dotenv from 'dotenv';
dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3600;

const express = require('express');
import databaseService from './database/database.service';
import cors from 'cors';
import path from 'path'; // inside nodejs
import bodyParser from 'body-parser';
import router from './router';
import customLogger from './commons/helpers/customLogger';
import { errorCatcher, errorHandler } from './commons/middlewares/error';
import passport from 'passport';
import strategy from './auth/auth.strategy';
const app = express();
databaseService.connect();
//Cross-Origin Resource Sharing
app.use(cors());
//logger.
app.use(customLogger);
//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
passport.use('jwt', strategy);

app.use('/api', router);
app.use(errorCatcher, errorHandler);

app.listen(port, () => {
  console.log(`server is running at  http://localhost:${port}`);
});
