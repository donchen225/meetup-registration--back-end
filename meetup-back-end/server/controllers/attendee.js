const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  Attendee.find({}, (error, data) => {
    if (error) {
      res.status(400).end();
      console.log(error);
    } else {
      res.status(200).send(data);
      console.log("all data is successfully retrieved from db")
    }
  })
};

exports.addOne = (req, res) => {
  Attendee.create(req.data, (error) => {
    if (error) {
      res.status(400).end();
      console.log(error);
    } else {
      res.status(200).end();
      console.log("data is successfully inserted into db")
    }
  })
};

exports.getOne = (req, res) => {
  const {id} = req.params;
  Attendee.find({attendeeId: Number(id)}, (error, results) => {
    if (error) {
      res.status(400).end();
      console.log(error);
    } else {
      res.status(200).end();
      console.log("data is successfully retrieved from db");
    }
  })
}

exports.updateOne = (req, res) => {
  const {id} = req.params;
  const {data} = req.body;
  Attendee.updateOne({attendeeId: Number(id), data}, (error, results) => {
    if (error) {
      res.status(400).end();
      console.log(error);
    } else {
      res.status(200).end();
      console.log("data is successfully updated in db");
    }
  })
}

exports.deleteOne = (req, res) => {
  const {id} = req.params;
  Attendee.deleteOne({attendeeId: Number(id)}, (error, results) => {
    if (error) {
      res.status(400).end();
      console.log(error);
    } else {
      res.status(200).end();
      console.log("data is successfully deleted from db");
    }
  })
}

exports.deleteAll = (req, res) => {
  Attendee.deleteMany({}, (error, results) => {
    if (error) {
      res.status(400).end();
      console.log(error);
    } else {
      res.status(200).end();
      console.log("all data is successfully deleted from db");
    }
  })
}