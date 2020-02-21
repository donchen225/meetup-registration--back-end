const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minLength: 2, maxLength: 20 },
  lastName: { type: String, required: true, minLength: 2, maxLength: 20 },
  email: { type: String, required: true, unique: true, minLength: 3 },
  shirt: { type: String, required: true, enum: ["XS", "S", "M", "L", "XL", "XXL"]},
  skillLevel: { type: String, required: true, enum: ["beginner", "intermediate", "expert"]}
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;