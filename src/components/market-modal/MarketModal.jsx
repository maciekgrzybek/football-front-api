import React, { useContext } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';


import Outcome from '../outcome/Outcome';
import { OddsContext } from '../../contexts/oddsContext';
import styles from './styles.module.scss';

function MarketModal({ visible, market, outcomes, onCancel }) {
  const [isFractal, setOddsType] = useContext(OddsContext);
  function renderOutcomes() {
    return outcomes.map((item) => {
      return (
        <Outcome key={item.data.outcomeId} outcomeData={item.data} className={styles['market-card']} />
      );
    });
  }
  return (
    <Modal visible={visible} footer={null} onCancel={onCancel}>
      <h3>{market && market.name}</h3>
      <OddsButton className={styles['odds-button']}/>
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
  outcomes: PropTypes.array,
  onCancel: PropTypes.func,
};

export default MarketModal;
