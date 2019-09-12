import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

import OutcomeList from '../outcome/OutcomeList';
import OddsButton from '../odds-button/OddsButton';
import styles from './styles.module.scss';

function MarketModal({ visible, market, onCancel }) {
  return (
    <Modal visible={visible} footer={null} onCancel={onCancel}>
      <h3>{market && market.name}</h3>
      <OddsButton className={styles['odds-button']}/>
      <div className={styles['outcome-row']}>
        {market && <OutcomeList outcomesIds={market.outcomes} />}
      </div>
    </Modal>
  );
}
MarketModal.defaultProps = {
  visible: false,
};

MarketModal.propTypes = {
  visible: PropTypes.bool,
  market: PropTypes.object,
  onCancel: PropTypes.func,
};

export default MarketModal;
