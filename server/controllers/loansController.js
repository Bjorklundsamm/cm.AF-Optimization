const Loans = require('../models/loansModel.js');

const getAll = (req, res) => {
  Loans.getAll((err, loans) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(loans);
    }
  })
};

const getById = (req, res) => {
  Loans.getById(req.params.id, (err, loan) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(loan);
    }
  })
};

module.exports = {
  getAll: getAll,
  getById: getById
};
