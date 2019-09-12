import React from 'react';
import PropTypes from 'prop-types';

import OddsButton from '../odds-button/OddsButton';
import styles from './styles.module.scss';

function MarketHeader({ name }) {
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

MarketHeader.propTypes = {
  name: PropTypes.string,
};

export default MarketHeader;
