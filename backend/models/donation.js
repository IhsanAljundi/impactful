// models/donation.js
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    donationAmount: { type: Number, required: true },
    email: { type: String, required: true },
    payment: {
        mastercard: Boolean,
        transfer: Boolean,
    },
    campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign', required: true },
});

module.exports = mongoose.model('Donation', donationSchema);
