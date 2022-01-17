import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Api from '../services/Api';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    setLoading(true);
    const results = await Api.getPosts();
    setPosts(results);
    setLoading(false);
  }, []);

  const context = {
    loading,
    setLoading,
    posts,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
