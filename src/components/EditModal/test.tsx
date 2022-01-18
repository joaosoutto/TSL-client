import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import EditModal from '.';

describe('<EditModal />', () => {
  it('should render component', () => {
    renderWithTheme(
      <EditModal open={true} setOpen={() => {}} body='mock_body' id='mock_id' />
    );

    expect(screen.getByTestId(/Edit modal/i)).toBeInTheDocument();
  });

  it('should render components', () => {
    renderWithTheme(
      <EditModal open={true} setOpen={() => {}} body='mock_body' id='mock_id' />
    );

    expect(screen.getByText(/edit post/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/edit icon/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /cancel button/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /edit button/i })
    ).toBeInTheDocument();
  });

  it('should render inputs', () => {
    renderWithTheme(
      <EditModal open={true} setOpen={() => {}} body='mock_body' id='mock_id' />
    );

    expect(screen.getByTestId(/title input/i)).toBeInTheDocument();
    expect(screen.getByTestId(/post input/i)).toBeInTheDocument();
  });
});
