
const mongoose = require('mongoose');



const bookingSchema = new mongoose.Schema({


name : { type: String  },
email : { type: String  },
date : { type: String, unique : true  },
message : { type: String  },







} , { timestamps: true });



module.exports = mongoose.model('Booking', bookingSchema);