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
  Attendee.create(req.body, (error, results) => {
    if (error) {
      res.status(400).end();
      console.log(error);
    } else {
      res.status(200).send(results);
      console.log("data is successfully inserted into db")
    }
  })
};

exports.getOne = (req, res) => {
  const {id} = req.params;
  Attendee.find({ _id: id }, (error, results) => {
    if (error) {
      res.status(400).end();
      console.log(error);
    } else {
      res.status(200).send(results);
      console.log("data is successfully retrieved from db");
    }
  })
}

exports.updateOne = (req, res) => {
  const {id} = req.params;
  // console.log('what is request body', req.body);
  Attendee.updateOne({ _id: id }, req.body, (error, results) => {
    if (error) {
      res.status(400).end();
      console.log(error);
    } else {
      res.status(200).send(results);
      console.log("data is successfully updated in db");
    }
  })
}

exports.updateOnePart = (req, res) => {
  const {id} = req.params;
  Attendee.updateOne({_id: id}, {$set: req.body}, (error, results) => {
    if (error) {
      res.status(400).end();
      console.log(error);
    } else {
      res.status(200).send(results);
      console.log("partial data is successfully updated in db");
    }
  })
}

exports.deleteOne = (req, res) => {
  const {id} = req.params;
  Attendee.deleteOne({ _id : id}, (error, results) => {
    if (error) {
      res.status(400).end();
      console.log(error);
    } else {
      res.status(200).send(results);
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
      res.status(200).send(results);
      console.log("all data is successfully deleted from db");
    }
  })
}