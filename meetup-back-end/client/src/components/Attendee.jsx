import React from 'react';

const Attendee = ({ attendee, deleteAttendee }) => (
  <div>
    {`${attendee.firstName} ${attendee.lastName}`}
    <button onClick={() => {deleteAttendee(attendee)}}> X </button>
  </div>
);

export default Attendee;