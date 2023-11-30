// models/volunteer.js
const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    reason: { type: String },
    availability: {
        senin: Boolean,
        selasa: Boolean,
        rabu: Boolean,
        kamis: Boolean,
        jumat: Boolean,
        sabtu: Boolean,
        minggu: Boolean,
    },
    campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign', required: true },
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
