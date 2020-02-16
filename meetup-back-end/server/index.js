const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db');
const controller = require('./controllers/attendee.js')

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));

// const dontUseMe = () => throw new Error('implement controllers');

app.get('/attendees', controller.getAll);
app.post('/attendees', controller.addOne);
app.get('/attendees/:id', controller.getOne);
app.put('/attendees/:id', controller.updateOne);
app.delete('/attendees', controller.deleteAll);
app.delete('/attendees/:id', controller.deleteOne);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
