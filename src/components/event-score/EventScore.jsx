import React from 'react';

import styles from './styles.module.scss';

function EventScore({ data }) {
  const homeTeam = data.competitors.find(item => item.position === 'home');
  const awayTeam = data.competitors.find(item => item.position === 'away');

  return (
    <div className={styles.wrapper}>
      <div>
        <h3>
          {homeTeam.name}
          <span className={styles['score']}>
            {data.scores['home']}
          </span>
        </h3>
      </div>
      <div>
        <h3>
          {awayTeam.name}
          <span className={styles['score']}>
            {data.scores['away']}
          </span>
        </h3>
      </div>
    </div>
  );
}

export default EventScore;
