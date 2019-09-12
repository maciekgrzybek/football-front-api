import React from 'react';

import getDate from '../../helpers/getDate';

function EventDate({ date }) {
  const { dayOfMonth, dayOfWeek, month, time } = getDate(date);
  return (
    <h4>{`${dayOfMonth} of ${month}, ${dayOfWeek}, ${time}`}</h4>
  );
}

export default EventDate;
