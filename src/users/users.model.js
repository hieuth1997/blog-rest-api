import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema(
  {
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    avatar: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      enum: ['customer', 'admin', 'editor', 'seller'],
      required: true,
      default: 'customer',
    },
    isSuggestPropertiesOnEmail: {
      type: Boolean,
      default: true,
    },
    isNotifyPropertyUpdate: {
      type: Boolean,
      default: true,
    },
  },
  { timestamp: true },
);
userSchema.pre('save', function (next) {
  if (this.isNew || this.isModified('password')) {
    this.hashPassword();
  }
  return next();
});
userSchema.method('hashPassword', async function () {
  try {
    let hashPassword = await bcrypt.hash(
      this.password,
      10,
      function (err, hash) {
        if (err) {
          return err;
        }
        return hash;
      },
    );
    this.password = hashPassword;
  } catch (err) {
    throw err;
  }
});
userSchema.method('comparePassword', function (password) {
  let isCompared;
  bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
    if (err) {
      return err;
    }
    isCompared = result;
    // result == true
  });
  return isCompared;
});
export const userModel = mongoose.model('user', userSchema);
export default userModel;
