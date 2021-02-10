const Sellers = require('../../database/models/sellers');

const getAll = (req, res) => {
  Sellers.getAll((err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

const getById = (req, res) => {
  Sellers.getById(req.params.id, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

const getByCity = (req, res) => {
  Sellers.getByCity(req.params.city, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

module.exports = {
  getAll,
  getById,
  getByCity,
};
