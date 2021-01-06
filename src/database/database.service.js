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
    if (err) {
      console.log('connect database failed');
    } else {
      console.log('database is connected');
    }
  });
};
export default { connect };
