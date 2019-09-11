import { useContext } from 'react';
import { Modal, Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';

import Outcome from '../outcome/Outcome';
import { OddsContext } from '../../contexts/oddsContext';

function MarketModal({ visible, market, outcomes, onCancel }) {
  const [isFractal, setOddsType] = useContext(OddsContext);
  function renderOutcomes() {
    return outcomes.map((item) => {
      return (
        <Col key={item.data.outcomeId}>
          <Outcome outcomeData={item.data} />
        </Col>

      );
    });
  }
  return (
    <Modal visible={visible} footer={null} onCancel={onCancel}>
      <h3>{market && market.name}</h3>
      <Button onClick={() => setOddsType(!isFractal)}>Change odds type</Button>
      <Row>
        {outcomes && renderOutcomes()}
      </Row>
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
