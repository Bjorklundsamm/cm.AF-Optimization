const express = require('express');
const TaxesController = require('../../database/models/tax_codes');
const MortgageController = require('../../database/models/mortgages');

const router = express.Router();

router.get('/taxes/:taxid', TaxesController.getOne);
router.get('/mortgages/:mortgagesid', MortgageController.getOne);

module.exports = router;
