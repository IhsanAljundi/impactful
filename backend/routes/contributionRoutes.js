// routes/contributionRoutes.js
const express = require('express');
const router = express.Router();
const contributionController = require('../controllers/contributionController');

router.post('/volunteer', contributionController.volunteer);
router.post('/donation', contributionController.donation);
router.get('/contributions', contributionController.getListContributions);

module.exports = router;
