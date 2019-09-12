import { useState } from 'react';
// const getTeamData = (data, position) => data.filter(item => item.position === position)[0];

// export default getTeamData;

function useTeams(data) {
  const [teams, setTeams] = useState();

  data.map(item => {
    const teamData = {};
    if (teamData)
  })
}