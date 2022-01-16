import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import FormCover from '.';

describe('<FormCover />', () => {
  it('should render component', () => {
    renderWithTheme(<FormCover />);

    expect(screen.getByTestId(/logo/i)).toBeInTheDocument();
    expect(screen.getByText(/post, share, wall it/i)).toBeInTheDocument();
    expect(screen.getByText(/welcome to the silver wall/i)).toBeInTheDocument();
  });
});
