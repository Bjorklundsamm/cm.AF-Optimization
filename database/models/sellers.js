const DB = require('../db');

const getAll = (callback) => {
  const query = 'SELECT seller_id, name, email, city, ip FROM seller_table LIMIT 25';
  DB.execute(query)
    .then((result) => callback(result.rows));
};

const getByCity = (params, callback) => {
  const query = 'SELECT seller_id, name, email, city FROM seller_table WHERE city = ?';
  DB.execute(query)
    .then((result) => callback(result.rows));
};

const getOne = (params, callback) => {
  const query = 'SELECT * FROM seller_table WHERE seller_id=?';
  DB.execute(query, params)
    .then((result) => callback(result.rows[0]));
};

module.exports = {
  getAll,
  getByCity,
  getOne,
};
