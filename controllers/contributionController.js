// controllers/contributionController.js
const Contribution = require('../models/contribution');

exports.createContribution = async (req, res) => {
    try {
        const { type } = req.body;
        const contribution = new Contribution({ type });
        await contribution.save();
        res.status(201).json({ success: true, message: 'Contribution created successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getListOfContributions = async (req, res) => {
    try {
        const contributions = await Contribution.find();
        res.status(200).json({ success: true, data: contributions });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
