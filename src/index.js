const express = require('express');
const morgan = require('morgan');
const path = require('path');
var exphbs = require('express-handlebars');
const route = require('./routes');

const app = express();
const port = 3000;
//http logger.
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public/')));
//route middle
route(app);
//template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//set home directory
app.set('views', path.join(__dirname, 'resources/views'));
app.set('news', path.join(__dirname, 'resources/news'));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
