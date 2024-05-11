import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

import { getRandomName } from '../../utils/api/api';

jest.mock('../../utils/api/api');

test('submits form and validates name correctly', async () => {
  (getRandomName as jest.Mock).mockResolvedValue({
    results: [{ name: { first: 'John', last: 'Doe' } }],
  });

  const { getByPlaceholderText, getByRole } = render(<RegistrationForm />);
  fireEvent.change(getByPlaceholderText('Введите ФИО'), {
    target: { value: 'John Doe' },
  });
  fireEvent.submit(getByRole('button', { name: 'Сохранить' }));

  await waitFor(() => {
    // test here
  });
});
