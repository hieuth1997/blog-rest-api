import mongoose from 'mongoose';

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
export const userModel = mongoose.model('user', userSchema);
export default userModel;
