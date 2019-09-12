import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const OddsContext = createContext(['', () => {}]);

const OddsProvider = ({ children }) => {
  const [isFractal, setOddsType] = useState(false);
  return (
    <OddsContext.Provider value={[isFractal, setOddsType]}>
      {children}
    </OddsContext.Provider>
  );
};

OddsContext.propTypes = {
  children: PropTypes.element,
};

export { OddsContext, OddsProvider };
