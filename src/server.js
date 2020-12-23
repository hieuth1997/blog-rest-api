const express = require('express');
import morgan from 'morgan';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(morgan('combined'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
