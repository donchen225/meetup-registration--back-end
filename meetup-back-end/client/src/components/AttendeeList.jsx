import React from 'react';
import AttendeeSkillList from './AttendeeSkillList.jsx';

const groupBy = (list, property) => {
  const groups = {};
  list.forEach(element => {
    let group = element[property];
    if (!(group in groups)) {
      groups[group] = [];
    }
    groups[group].push(element);
  });
  return groups;
};

const AttendeeList = ({ attendees, deleteAttendee }) => {
  const groups = groupBy(attendees, 'skillLevel');
  return (
    <div className="attendees">
      <h2>Attendees</h2>
      <AttendeeSkillList title="Expert" attendees={groups.expert} deleteAttendee={deleteAttendee}/>
      <AttendeeSkillList title="Intermediate" attendees={groups.intermediate} deleteAttendee={deleteAttendee} />
      <AttendeeSkillList title="Beginner" attendees={groups.beginner} deleteAttendee={deleteAttendee}/>
    </div>
  );
};

export default AttendeeList;