
const mongoose = require('mongoose');



const messagesSchema = new mongoose.Schema({


properties : {
    fullname : { type: String  },
email : { type: String  },
messages : { type: String  },
phone : { type: String  },
service : { type: Array , default : []  },
}







} , { timestamps: true });



module.exports = mongoose.model('Message', messagesSchema);