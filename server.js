const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verification
transporter.verify((error, success) => {
  if (error) {
    console.log('Error configuring email transporter:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

// Contact Route
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // Sender address (from form)
    to: process.env.EMAIL_USER, // Receiver address (your email)
    subject: `Portfolio Contact from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <div style="padding: 10px; background-color: #f4f4f4; border-radius: 5px;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ status: 'success', message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ status: 'error', message: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
