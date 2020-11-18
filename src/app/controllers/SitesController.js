const Blog = require('../models/blogs');
class SitesController {
    home(req, res) {
        console.log(Blog);
        Blog.find({}, function (err, blogs) {
            if (!err) {
                res.json(blogs);
            } else {
                res.status(500).json({ error: "Can't connect database" });
            }
        });
    }
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SitesController();
