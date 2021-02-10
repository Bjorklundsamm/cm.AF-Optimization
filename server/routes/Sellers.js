const express = require('express');
const Sellers = require('../controllers/sellerController');

const router = express.Router();

router.get('/', Sellers.getByCity);
router.get('/:Sellerid', Sellers.getOne);

module.exports = router;
