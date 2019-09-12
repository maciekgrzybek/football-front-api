import React from 'react';

function EventTitle({ data }) {
  const homeTeam = data.competitors.filter(item => item.position === 'home')[0];
  const awayTeam = data.competitors.filter(item => item.position === 'away')[0];

  return (
    <h2>
      {homeTeam.name}
      <span>{data.scores['home']} : {data.scores['away']} </span>
      {awayTeam.name}
    </h2>
  );
}

export default EventTitle;
