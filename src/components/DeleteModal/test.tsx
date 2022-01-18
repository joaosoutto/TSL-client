import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import DeleteModal from '.';

describe('<DeleteModal />', () => {
  it('should render component', () => {
    renderWithTheme(
      <DeleteModal open={true} setOpen={() => {}} id='mock_id' />
    );

    expect(screen.getByTestId(/Delete modal/i)).toBeInTheDocument();
  });

  it('should render components', () => {
    renderWithTheme(
      <DeleteModal open={true} setOpen={() => {}} id='mock_id' />
    );

    expect(screen.getByText(/warning/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/delete icon/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Are you sure you want to delete the post/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /cancel button/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /delete button/i })
    ).toBeInTheDocument();
  });
});
