const express = require('express');
const cors = require('cors');
const Houses = require('./routes/Houses');
const Sellers = require('./routes/Sellers');
const Rates = require('./routes/TaxesAndMortgages');

const app = express();
// const port = process.env.PRODUCTION_PORT || 9999;
const port = 3001;

app.use(cors());
app.use('/', express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ROUTES
app.get('/houses', Houses);
app.get('/sellers', Sellers);
app.get('/rates', Rates);

app.listen(port, () => {
  console.log(`AffordabilityCalculator service listening at port ${port}`);
});
