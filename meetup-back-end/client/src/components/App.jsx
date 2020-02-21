import React from 'react';
import axios from 'axios';
import AttendeeForm from './AttendeeForm.jsx';
import AttendeeList from './AttendeeList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      attendees: [],
    };
    this.addAttendee = this.addAttendee.bind(this);
    this.getAttendees = this.getAttendees.bind(this);
    this.deleteAttendee = this.deleteAttendee.bind(this);
    this.updateAttendee = this.updateAttendee.bind(this);
  }

  componentDidMount() {
    this.getAttendees();
  }

  getAttendees() {
    axios.get('/attendees')
      .then(res => {
        this.setState({
          attendees: res.data,
        });
      });
  }

  addAttendee(attendee) {
    axios.post('/attendees', attendee)
      .then(() => {
        this.getAttendees();
      });
  }

  deleteAttendee(attendee) {
    axios.delete(`/attendees/:id/${attendee._id}`, {
      params: { id: attendee._id }
    })
      .then(() => {
        console.log('delete request is successful')
        this.getAttendees();
      })
      .catch(() => {
        console.log('delete request is unsuccessful')
      })
  }

  updateAttendee(attendee) {
    axios.patch(`/attendees/:id/${attendee._id}`, {
      params: { id: attendee._id },
    }, attendee)
      .then(() => {
        console.log('patch request is successful')
        this.getAttendees();
      })
      .catch(() => {
        console.log('patch request is unsuccessful')
      })
  }

  render() {
    return (
      <div className="main">
        <AttendeeForm addAttendee={this.addAttendee}
          updateAttendee={this.updateAttendee}/>
        <AttendeeList attendees={this.state.attendees}
          deleteAttendee={this.deleteAttendee}/>
      </div>);
  }
}

export default App;
