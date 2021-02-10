const DB = require('../db');

const getOne = (params, callback) => {
  const query = 'SELECT * FROM mortgage_types';
  DB.execute(query, params)
    .then((result) => callback(result.rows[0]));
};

module.exports = {
  getOne,
};
