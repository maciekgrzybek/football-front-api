import React from 'react';
import PropTypes from 'prop-types';

import getDate from '../../helpers/getDate';

function EventDate({ date }) {
  const { dayOfMonth, dayOfWeek, month, time } = getDate(date);
  return (
    <h4>{`${dayOfMonth} of ${month}, ${dayOfWeek}, ${time}`}</h4>
  );
}

EventDate.propTypes = {
  date: PropTypes.string,
};

export default EventDate;
