import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import PostCard from '.';

describe('<PostCard />', () => {
  it('should render component with props', () => {
    renderWithTheme(
      <PostCard
        id='mock_id'
        title='mock_title'
        owner='mock_owner'
        post='mock_post'
      />
    );

    expect(screen.getByTestId(/post card/i)).toBeInTheDocument();
  });

  it('should render components', () => {
    renderWithTheme(
      <PostCard
        id='mock_id'
        title='mock_title'
        owner='mock_owner'
        post='mock_post'
      />
    );

    expect(
      screen.getByRole('heading', { name: /mock_title/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /mock_owner/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /mock_id/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/mock_post/i)).toBeInTheDocument();
  });

  it('should render default title without props', () => {
    renderWithTheme(
      <PostCard id='mock_id' owner='mock_owner' post='mock_post' />
    );

    expect(
      screen.getByRole('heading', { name: /Post title/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /mock_owner/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /mock_id/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/mock_post/i)).toBeInTheDocument();
  });
});
