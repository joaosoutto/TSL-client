import { ReactElement, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';

import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import PostCard from '../../components/PostCard';
import NewPostButton from '../../components/NewPostButton';

import Api from '../../services/Api';
import * as S from './styles';

import noPosts from '../../assets/noPosts.png';

const MyPosts = (): ReactElement => {
  const { loading, setLoading } = useContext(AppContext);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const posts = await Api.getMyPosts();
      setMyPosts(posts);
      setLoading(false);
    };
    getPosts();
  }, [setLoading]);

  if (loading)
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  if (!loading && myPosts.length === 0)
    return (
      <Layout>
        <S.NoPosts>
          <S.Img alt='A broken wall' src={noPosts} />
          <S.Text>You dont have any posts yet.</S.Text>
        </S.NoPosts>
        <NewPostButton />
      </Layout>
    );

  return (
    <Layout>
      <S.Wrapper>
        {myPosts
          ?.sort((a: { id: string }, b: { id: string }) =>
            a.id > b.id ? -1 : 1
          )
          .map(
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
        <NewPostButton />
      </S.Wrapper>
    </Layout>
  );
};

export default MyPosts;
