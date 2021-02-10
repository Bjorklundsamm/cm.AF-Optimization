const Houses = require('../../database/models/listings');

const getAll = (req, res) => {
  Houses.getAll((err, houses) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(houses);
    }
  });
};

const getById = (req, res) => {
  Houses.getById(req.params.id, (err, house) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(house);
    }
  });
};

module.exports = {
  getAll,
  getById,
};
