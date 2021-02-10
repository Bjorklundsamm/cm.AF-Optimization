const Taxes = require('../models/taxesModel.js');

const getAll = (req, res) => {
  Taxes.getAll((err, taxes) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(taxes);
    }
  });
};

const getById = (req, res) => {
  Taxes.getById(req.params.id, (err, tax) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(tax);
    }
  });
};

const getByState = (req, res) => {
  // res.status(200).send(req.params.state);
  Taxes.getByState(req.params.state, (err, tax) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(tax);
    }
  });
};

module.exports = {
  getAll,
  getById,
  getByState,
};
