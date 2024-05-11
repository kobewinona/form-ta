import React from 'react';
import { act, render, fireEvent, waitFor } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

import * as api from '../../utils/api/api';
import { NAME_VALIDATION_MESSAGES } from '../../utils/constants';

jest.mock('../../utils/api/api', () => ({
  getRandomName: jest.fn().mockResolvedValue({
    results: [{ name: { first: 'Jane', last: 'Smith' } }],
  }),
}));

describe('submitting registration form', () => {
  let getByTestId: (id: string) => HTMLElement;
  let getByRole: (role: string, name?: { name: string }) => HTMLElement;

  beforeEach(async () => {
    jest.clearAllMocks();

    const utils = render(<RegistrationForm />);
    getByTestId = utils.getByTestId;
    getByRole = utils.getByRole;

    await act(async () => {
      fireEvent.change(getByTestId('gender-test'), {
        target: { value: 'male' },
      });
      fireEvent.change(getByTestId('birthdate-test'), {
        target: { value: new Date().toISOString().slice(0, 10) },
      });
    });
  });

  it(`alerts '${NAME_VALIDATION_MESSAGES.nameIsInUse}' if API returns matching name`, async () => {
    const mockFullName = 'John Doe';
    (api.getRandomName as jest.Mock).mockResolvedValue({
      results: [{ name: { first: 'John', last: 'Doe' } }],
    });

    fireEvent.change(getByTestId('fullName-test'), {
      target: { value: mockFullName },
    });
    fireEvent.submit(getByRole('button', { name: 'Сохранить' }));

    await waitFor(() => {
      expect(api.getRandomName).toHaveBeenCalled();
      expect(global.alert).toHaveBeenCalledWith(
        NAME_VALIDATION_MESSAGES.nameIsInUse,
      );
    });
  });

  it(`alerts '${NAME_VALIDATION_MESSAGES.success}' if API returns non-matching name`, async () => {
    (api.getRandomName as jest.Mock).mockResolvedValue({
      results: [{ name: { first: 'Jane', last: 'Smith' } }],
    });

    fireEvent.change(getByTestId('fullName-test'), {
      target: { value: 'John Doe' },
    });
    fireEvent.submit(getByRole('button', { name: 'Сохранить' }));

    await waitFor(() => {
      expect(api.getRandomName).toHaveBeenCalled();
      expect(global.alert).toHaveBeenCalledWith(
        NAME_VALIDATION_MESSAGES.success,
      );
    });
  });
});
