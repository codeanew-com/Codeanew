const Message = require('../Models/Messages');
const dotenv = require('dotenv');
const axios = require('axios');
const BookingCal = require('../Models/BookingCal');
dotenv.config();



exports.booking = async (req, res) => {
    try {
      const { name, email, date, message } = req.body;
  
      const newBooking = new Booking({
        name,
        email,
        date,
        message,
      });
  
      const transporter = nodemailer.createTransport({
        service: "regumapps.info@gmail.com",
        auth: {
          user: "regumapps.info@gmail.com",
          pass: "fslhggi!!@@",
        },
      });
  
      const savedBooking = await newBooking.save();
  
      const bookingDate = new Date(date);
      const emailDate = new Date(bookingDate);
      emailDate.setDate(bookingDate.getDate() - 2);
  
      const currentTime = new Date();
  
      if (true) {
        const timeDifference = emailDate - currentTime;
  
        setTimeout(() => {
          // Define email content
          console.log("i will try");
  
          const mailOptions = {
            from: "regumapps.info@gmail.com",
            to: email,
            subject: "Reminder: Upcoming Booking",
            text: `Dear ${name},\n\nThis is a reminder that you have a booking scheduled on ${bookingDate.toDateString()}.\n\nBest regards,\nRegum Team`,
          };
  
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error("Error sending email:", error);
            } else {
              console.log("Email sent:", info.response);
            }
          });
        }, timeDifference);
      }
  
      res.json({ meta: "call booked successfully", savedBooking });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


exports.bookingsData = async (req, res) => {
    const url = `${process.env.CAL_API_URL}`;

    try {
        // Fetch data from the external API
        const response = await axios.get(url);

        // Save each booking to MongoDB
        const bookings = response.data.bookings;

        if (bookings && bookings.length > 0) {
            await BookingCal.insertMany(bookings);
        }

        res.status(200).json({ message: 'Bookings fetched and saved successfully.', data: bookings });
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ success: false, error: error.response ? error.response.data : error.message });
    }
};
