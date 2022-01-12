import { fireEvent, screen, render } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import Header from '.';

describe('<Header />', () => {
  it('should render Header', () => {
    renderWithTheme(<Header />);

    expect(screen.getByLabelText(/login/i)).toBeInTheDocument();
  });
});
