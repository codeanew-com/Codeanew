
const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({

email: { type: String, required: true, unique: true },
fullname : { type: String  },
password : { type: String  },
agreeToTerms : { type: Boolean  },
token : { type : String},
profilePhoto: { type: String },





} , { timestamps: true });



module.exports = mongoose.model('User', userSchema);