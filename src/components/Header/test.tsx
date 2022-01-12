import { fireEvent, screen, render } from '@testing-library/react';

import Header from '.';

describe('<Header />', () => {
  it('should render Header', () => {
    render(<Header />);

    expect(screen.getByLabelText(/login/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/the silver wall/i)).toBeInTheDocument();
  });
});
