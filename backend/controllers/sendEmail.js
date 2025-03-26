const nodemailer = require('nodemailer');


async function sendConfirmationEmail({ userEmail, userName, doctorName, date, time }) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // Use Gmail App Password here
    }
  });

  const mailOptions = {
    from: '"DocDoc App" <' + process.env.EMAIL_USER + '>',
    to: userEmail,
    subject: 'Your Appointment is Confirmed!',
    html: `
      <h2>Hi ${userName},</h2>
      <p>Your appointment with <strong>${doctorName}</strong> has been confirmed!</p>
      <ul>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
      </ul>
      <p>Thank you for booking with <strong>DocDoc</strong>! 😊</p>
    `
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendConfirmationEmail;
