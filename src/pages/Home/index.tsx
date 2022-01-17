import { useContext, useEffect, useState } from 'react';
import * as S from './styles';

import { AppContext } from '../../context/AppContext';
import getToken from '../../services/getToken';

import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import PostCard from '../../components/PostCard';
import NewPostButton from '../../components/NewPostButton';

const Home = () => {
  const { posts, loading } = useContext(AppContext);
  const [token, setToken] = useState('');

  useEffect(() => {
    const userToken = getToken();
    setToken(userToken);
  }, [posts]);

  if (loading)
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  return (
    <Layout>
      <S.Wrapper>
        {posts?.map(
          (post: {
            title?: string;
            owner: string;
            body: string;
            id: string;
          }) => (
            <PostCard
              title={post.title}
              owner={post.owner}
              post={post.body}
              id={post.id}
              key={post.id}
            />
          )
        )}

        {token ? <NewPostButton /> : null}
      </S.Wrapper>
    </Layout>
  );
};

export default Home;
