import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { OddsContext } from '../../contexts/oddsContext';

function OddsButton({ className }) {
  const [isFractal, setOddsType] = useContext(OddsContext);
  const handleClick = (e) => {
    e.stopPropagation();
    setOddsType(!isFractal)
  }
  return (
    <Button
      size='small'
      onClick={handleClick}
      className={className}>
        Change odds type
    </Button>
  );
}

OddsButton.propTypes = {
  className: PropTypes.string,
};

export default OddsButton;