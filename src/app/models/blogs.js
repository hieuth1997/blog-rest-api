const { Mongoose } = require('mongoose');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema({
    author: { type: String },
    title: { type: String },
    body: { type: String },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blog', Blog);
