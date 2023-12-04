const Volunteer = require('../models/volunteer');
const Donation = require('../models/donation');

module.exports = {
  volunteer: async (req, res) => {
    const { name, email, reason, availability, campaign } = req.body;

    try {
      // Simpan data volunteer ke database
      const newVolunteer = new Volunteer({ name, email, reason, availability, campaign });
      await newVolunteer.save();

      return res.status(201).json({ success: true, message: 'Volunteer created successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  },

  donation: async (req, res) => {
    const { donationAmount, email, payment, campaign } = req.body;

    try {
      // Simpan data donation ke database
      const donation = new Donation({
        donationAmount,
        email,
        payment,
        campaign
      });
      await donation.save();

      return res.status(201).json({ success: true, message: 'Donation created successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  },

  getListContributions: async (req, res) => {
    const userId = req.user.id; // Ambil ID pengguna dari data otentikasi (asumsi otentikasi sudah ditangani sebelumnya)

    try {
      // Ambil semua kontribusi (volunteer dan donation) dari pengguna dengan ID tertentu
      const volunteerContributions = await Volunteer.find({ userId }).populate('campaign');
      const donationContributions = await Donation.find({ userId }).populate('campaign');

      return res.status(200).json({
        success: true,
        volunteerContributions,
        donationContributions,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  },

  getListFollowedCampaigns: async (req, res) => {
    const userId = req.user.id; // Ambil ID pengguna dari data otentikasi (asumsi otentikasi sudah ditangani sebelumnya)

    try {
      // Ambil daftar kampanye yang diikuti oleh pengguna sebagai donatur
      const donationCampaigns = await Donation.find({ userId }).populate('campaign');

      // Ambil daftar kampanye yang diikuti oleh pengguna sebagai relawan
      const volunteerCampaigns = await Volunteer.find({ userId }).populate('campaign');

      //Fixed Only return the campaigns
      const campaigns = [
        ...donationCampaigns.map(donation => donation.campaign),
        ...volunteerCampaigns.map(volunteer => volunteer.campaign),
      ];

      return res.status(200).json({
        success: true,
        campaigns,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  },
};
