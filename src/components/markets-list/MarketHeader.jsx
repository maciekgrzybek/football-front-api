import React from 'react';

import OddsButton from '../odds-button/OddsButton';
import styles from './styles.module.scss';

function MarketHeader({name}) {
  return (
    <div className={styles['market-header']}>
      <div>
        <h4 className={styles['header']}>{name}</h4>
      </div>
      <div>
        <OddsButton/>
      </div>
    </div>
  );
}

export default MarketHeader;
