const express = require('express');
const Houses = require('./controllers/housesController.js');
const Loans = require('./controllers/loansController.js');
const app = express();
const port = 3000;

app.use('/', express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API
app.get('/houses', Houses.getAll);
app.get('/houses/:id', Houses.getById);

app.get('/loans', Loans.getAll);
app.get('/loans/:id', Loans.getById);
// app.get('/taxes/:id');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});