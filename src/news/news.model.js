import mongoose from 'mongoose';
import slug from 'slugify';
import crypto from 'crypto';

const newsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    metaDescription: String,
    metaKeyword: String,
    title: String,
    slug: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
    },
    picture: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

newsSchema.pre('save', function (next) {
  if (this.isNew) {
    this.slug = slug(this.name) + '-' + crypto.randomBytes(5).toString('hex');
  }
  return next();
});

export const newsModel = mongoose.model('newsItem', newsSchema);
export default newsModel;
