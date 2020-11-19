const express = require('express');
const morgan = require('morgan');
const path = require('path');
var exphbs = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
// connect the database
db.connect();

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
app.set('views', path.join(__dirname, 'resources', 'views'));
app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`);
});
