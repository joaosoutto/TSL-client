import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Email } from '@styled-icons/material-outlined';

import { renderWithTheme } from '../../utils/tests/helpers';

import FormTextField from '.';

describe('<FormTextField />', () => {
  it('Renders with placeholder', () => {
    renderWithTheme(<FormTextField placeholder='hey you' />);

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('Renders with Icon', () => {
    renderWithTheme(<FormTextField icon={<Email data-testid='icon' />} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('Changes its value when typing', async () => {
    const onInput = jest.fn();
    renderWithTheme(<FormTextField onInput={onInput} name='FormTextField' />);

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('Is accessible by tab', () => {
    renderWithTheme(<FormTextField />);

    const input = screen.getByRole('textbox');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
