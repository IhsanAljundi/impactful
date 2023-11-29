// routes/contributionRoutes.js
const express = require('express');
const router = express.Router();
const contributionController = require('../controllers/contributionController');

router.post('/contribution', contributionController.createContribution);
router.get('/contributions', contributionController.getListOfContributions);

module.exports = router;
