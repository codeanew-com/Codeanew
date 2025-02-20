const express = require("express")
const {VerifyToken} = require('../Middlewares/AuthMiddlewares');


const router = express.Router()
const bookingController = require('../Controller/Booking')


// router.post("/add/bookings" ,   bookingController.booking )
router.get('/bookings/all', VerifyToken ,  bookingController.bookingsData);




module.exports = router