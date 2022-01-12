import { createContext, useState } from 'react';

import PropTypes from 'prop-types';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const context = {
    loading,
    setLoading,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
