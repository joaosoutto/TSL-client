import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import NewPostModal from '.';

describe('<NewPostModal />', () => {
  it('should render component', () => {
    renderWithTheme(<NewPostModal open={true} setOpen={() => {}} />);

    expect(screen.getByTestId(/New post modal/i)).toBeInTheDocument();
  });

  it('should render components', () => {
    renderWithTheme(<NewPostModal open={true} setOpen={() => {}} />);

    expect(screen.getByText(/New post/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/new post icon/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /cancel button/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /post button/i })
    ).toBeInTheDocument();
  });

  it('should render inputs', () => {
    renderWithTheme(<NewPostModal open={true} setOpen={() => {}} />);

    expect(screen.getByPlaceholderText(/(optional)/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your post/i)).toBeInTheDocument();
  });
});
