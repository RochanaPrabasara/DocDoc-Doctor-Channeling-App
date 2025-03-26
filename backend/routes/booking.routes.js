const express = require('express');
const router = express.Router();
const Booking = require('../models/booking.model');
const sendConfirmationEmail = require('../controllers/sendEmail');


// Create new booking
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// Get all bookings for a doctor (optional)
router.get('/doctor/:id', async (req, res) => {
  try {
    const bookings = await Booking.find({ doctorId: req.params.id });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// Book Appointment API
router.post('/mail', async (req, res) => {
  const { doctorId, doctorName, date, time, patientName, patientEmail } = req.body;

  try {
    // Save booking to DB
    const newBooking = new Booking({ doctorId, doctorName, date, time, patientName, patientEmail });
    await newBooking.save();

    // Send confirmation email
    await sendConfirmationEmail({
      userEmail: patientEmail,
      userName: patientName,
      doctorName,
      date,
      time
    });

    res.status(201).json({ message: 'Booking successful, email sent!' });
    
  } catch (err) {
    console.error('Email sending failed:',err);
    res.status(500).json({ message: 'Booking failed.' });
    throw new Error('Failed to send confirmation email');
  }
});

module.exports = router;
