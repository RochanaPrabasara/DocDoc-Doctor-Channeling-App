const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  doctorId: { type: Number, required: true },
  doctorName: { type: String, required: true },
  date: { type: String, required: true }, // Format: YYYY-MM-DD
  time: { type: String, required: true }, // Format: hh:mm am/pm
  patientName: { type: String, required: true },
  patientEmail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
