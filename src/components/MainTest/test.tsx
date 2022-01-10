import { render, screen } from '@testing-library/react';

import MainTest from '.';

describe('<MainTest />', () => {
  it('should render the heading', () => {
    render(<MainTest />);

    expect(
      screen.getByRole('heading', { name: /testing example/i })
    ).toBeInTheDocument();

    expect(screen.queryByText(/terting ecample/i)).not.toBeInTheDocument();
  });
});
