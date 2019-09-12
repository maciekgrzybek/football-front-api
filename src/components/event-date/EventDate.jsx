import React from 'react';

import getDate from '../../helpers/getDate';

function EventDate({ date }) {
  const { day, time } = getDate(date);
  return (
    <h4>{`${day}, ${time}`}</h4>
  );
}

export default EventDate;
