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
      trim: true,
      default: '',
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
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    let hashPassword = await this.hashPassword();
    this.password = hashPassword;
  }
  return next();
});
userSchema.method('hashPassword', async function () {
  let hashPassword = await bcrypt.hash(this.password, 10);
  return hashPassword;
});
userSchema.method('comparePassword', async function (password) {
  const isEqual = await bcrypt.compare(password, this.password);
  return isEqual;
});
export const userModel = mongoose.model('user', userSchema);
export default userModel;
