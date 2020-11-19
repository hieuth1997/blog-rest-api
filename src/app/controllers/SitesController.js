const Blog = require('../models/blogs');
const { multipleMongoToObject } = require('../../utils/mongoose');
class SitesController {
    home(req, res, next) {
        Blog.find({})
            .then((blogs) => {
                const data = multipleMongoToObject(blogs);
                return res.render('home', data);
            })
            .catch((err) => next(err));
    }
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SitesController();
