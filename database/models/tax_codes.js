const DB = require('../db');

const getOne = (params, callback) => {
  const query = 'SELECT * FROM tax_codes WHERE tax_id=?';
  DB.execute(query, params)
    .then((result) => callback(result.rows[0]));
};

module.exports = {
  getOne,
};
