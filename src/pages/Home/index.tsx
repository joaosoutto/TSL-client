import { useContext, useEffect, useState } from 'react';

import getToken from '../../services/getToken';

import Layout from '../../components/Layout';
import Loading from '../../components/Loading';

import NewPostButton from '../../components/NewPostButton';
import { AppContext } from '../../context/AppContext';

const Home = () => {
  const { posts } = useContext(AppContext);
  const [token, setToken] = useState('');

  useEffect(() => {
    const userToken = getToken();
    setToken(userToken);
  }, [posts]);

  return (
    <Layout>
      <Loading />
      {token ? <NewPostButton /> : null}
    </Layout>
  );
};

export default Home;
