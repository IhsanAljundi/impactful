// models/contribution.js
const mongoose = require('mongoose');

const contributionSchema = new mongoose.Schema({
    type: { type: String, required: true }, // 'volunteer' or 'donation'
    // other fields as needed
});

module.exports = mongoose.model('Contribution', contributionSchema);
