const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  // your code here
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;