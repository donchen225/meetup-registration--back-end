const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true }
  firstName: { type: String, required: true }
  lastName: { type: String, required: true }
  email: { type: String, required: true, unique: true }
  shirt: { type: String, required: true, enum: ["XS", "S", "M", "L", "XL", "XXL"]},
  skillLevel: { type: String, required: true, enum: ["beginner", "intermediate", "expert"]}
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;