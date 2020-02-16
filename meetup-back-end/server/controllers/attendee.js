const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  Attendee.find({}, (error, data) => {
    if (error) {
      res.status(500).end();
      console.log(error);
    } else {
      res.status(200).send(data);
      console.log("data is successfully retrieved from db")
    }
  })
};

exports.add = (req, res) => {
  Attendee.create(req.data, (error) => {
    if (error) {
      res.status(500).end();
      console.log(error);
    } else {
      res.status(200).end();
      console.log("data is successfully inserted into db")
    }
  })
};


