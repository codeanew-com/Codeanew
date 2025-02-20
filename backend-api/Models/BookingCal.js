// const mongoose = require('mongoose');

// const bookingCalSchema = new mongoose.Schema({
//     id: Number,
//     userId: Number,
//     description: String,
//     eventTypeId: Number,
//     uid: String,
//     title: String,
//     startTime: Date,
//     endTime: Date,
//     attendees: [
//         {
//             email: String,
//             name: String,
//             timeZone: String,
//             locale: String,
//         }
//     ],
//     user: {
//         email: String,
//         name: String,
//         timeZone: String,
//         locale: String,
//     },
//     payment: [String],  // Adjust this according to the actual payment data structure
//     metadata: {
//         videoCallUrl: String,
//     },
//     status: String,
//     responses: {
//         name: String,
//         email: String,
//         notes: String,
//         guests: [String],
//         location: {
//             value: String,
//             optionValue: String,
//         },
//     },
//     fromReschedule: Boolean,
//     cancelledBy: String,
//     rescheduledBy: String,
// });

// const BookingCal = mongoose.model('BookingCal', bookingCalSchema);

// module.exports = BookingCal;



const mongoose = require('mongoose');
const { Schema } = mongoose;

const AttendeeSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  timeZone: { type: String, required: true },
  locale: { type: String }
});

const UserSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  timeZone: { type: String, required: true },
  locale: { type: String }
});

const ResponsesSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  notes: { type: String },
  guests: [{ type: String }],
  location: {
    value: { type: String },
    optionValue: { type: String }
  }
});

const MetadataSchema = new Schema({
  videoCallUrl: { type: String }
});

const BookingCalSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  userId: { type: Number, required: true },
  description: { type: String },
  eventTypeId: { type: Number, required: true },
  uid: { type: String, required: true },
  title: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  attendees: [AttendeeSchema],
  user: UserSchema,
  payment: { type: Array, default: [] }, // Empty array for now
  metadata: MetadataSchema,
  // status: { type: String, enum: ['ACCEPTED', 'PENDING', 'DECLINED'], default: 'PENDING' },
  status: { type: String  },
  responses: ResponsesSchema,
  fromReschedule: { type: String, default: null },
  cancelledBy: { type: String, default: null },
  rescheduledBy: { type: String, default: null }
}, { timestamps: true });

const BookingCal = mongoose.model('BookingCal', BookingCalSchema);

module.exports = BookingCal;
