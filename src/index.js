const express = require("express");
const morgan = require("morgan");
const path = require("path");
var exphbs = require("express-handlebars");

const app = express();
const port = 3000;
//http logger.
app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.render("home");
});
//template engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
//set home directory
app.set("views", path.join(__dirname, "resources/views"));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
