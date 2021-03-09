const DB = require('../db');

const getAll = (callback) => {
  const query = 'SELECT home_id, street_address, zip_code, county, city, cost FROM houses LIMIT 100';
  DB.execute(query)
    .then((result) => callback(result.rows));
};

const getById = (params, callback) => {
  const query = 'SELECT * FROM houses WHERE home_id=?';
  DB.execute(query, params)
    .then((result) => callback(result.rows[0]));
};

module.exports = {
  getAll,
  getById,
};
