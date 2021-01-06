import mongoose from 'mongoose';
const mongoUri =
  process.env.DB_URI || 'mongodb://192.168.1.9:27017/realestateLink';
const option = {
  useNewUrlParser: true,
  autoIndex: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
const connect = () => {
  mongoose.connect(mongoUri, option, (err) => {
    console.log(err || 'database is connected');
  });
};
export default { connect };
