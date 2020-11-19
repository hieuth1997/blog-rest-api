const { Mongoose } = require('mongoose');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        author: { type: String },
        title: { type: String },
        body: { type: String },
        createdDate: { type: Date, default: Date.now },
        updatedDate: { type: Date, default: Date.now },
    },
    {
        collection: 'Blogs',
    },
);

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
