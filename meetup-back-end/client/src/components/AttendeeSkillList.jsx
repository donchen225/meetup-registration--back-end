import React from 'react';
import Attendee from './Attendee.jsx';

const AttendeeSkillList = ({ title, attendees, deleteAttendee}) => (
  <div>
    <h3>{title}</h3>
    {attendees ? attendees.map(a => <Attendee attendee={a} key={a._id} deleteAttendee={deleteAttendee}/>) : '(none)'}
  </div>
);

export default AttendeeSkillList;