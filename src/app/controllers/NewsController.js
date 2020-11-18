class NewsController {
    // [GET] news
    index(req, res) {
        res.render('news');
    }
    //[GET] news:slugs
    show(req, res) {
        res.send('This Is node Js');
    }
}
module.exports = new NewsController();
