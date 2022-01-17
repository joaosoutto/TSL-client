import { useEffect, useState } from 'react';

import getToken from '../../services/getToken';

import Layout from '../../components/Layout';
import NewPostButton from '../../components/NewPostButton';

const Home = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const userToken = getToken();
    setToken(userToken);
  }, []);

  return (
    <Layout>
      <h1>Home</h1>
      {token ? <NewPostButton /> : null}
    </Layout>
  );
};

export default Home;
