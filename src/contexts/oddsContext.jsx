import React, { createContext, useState } from 'react';

const OddsContext = createContext(['', () => {}]);

const OddsProvider = ({ children }) => {
  const [isFractal, setOddsType] = useState(false);
  return (
    <OddsContext.Provider value={[isFractal, setOddsType]}>
      {children}
    </OddsContext.Provider>
  );
};

export { OddsContext, OddsProvider };
