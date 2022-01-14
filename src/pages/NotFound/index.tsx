import Layout from '../../components/Layout';
import page404 from '../../assets/page404.png';

import * as S from './styles';

const NotFound = () => (
  <Layout>
    <S.Wrapper>
      <S.Error>error 404</S.Error>
      <S.Divider />
      <S.Text>Ooops... Page not found!</S.Text>
      <S.Figure src={page404} alt='A broken wall' />
    </S.Wrapper>
  </Layout>
);

export default NotFound;
