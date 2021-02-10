const express = require('express');
const Houses = require('../controllers/housesController');

const router = express.Router();

router.get('/', Houses.getAll);
router.get('/:homeid', Houses.getById);

module.exports = router;
