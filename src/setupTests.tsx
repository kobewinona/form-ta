import React from 'react';
import '@testing-library/jest-dom';

import { SelectOption } from './types/types';

global.alert = jest.fn();

interface MockSelectProps {
  name: string;
  options: SelectOption[];
  onChange: (option: SelectOption) => void;
  value: string | number;
}

jest.mock('react-select', () => ({
  __esModule: true,
  default: ({ name, options, onChange, value }: MockSelectProps) => (
    <select
      data-testid={`${name}-test`}
      value={value}
      onChange={e => {
        onChange({
          value: e.currentTarget.value,
          label: e.currentTarget.options[e.currentTarget.selectedIndex].text,
        });
      }}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  ),
}));

interface MockDateProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

jest.mock('react-datepicker', () => {
  const OriginalReactDatepicker = jest.requireActual('react-datepicker');
  return {
    __esModule: true,
    ...OriginalReactDatepicker,
    default: ({ name, onChange, value }: MockDateProps) => (
      <input
        data-testid={`${name}-test`}
        type='date'
        value={value}
        onChange={e => onChange(e)}
      />
    ),
    registerLocale: jest.fn(),
    setDefaultLocale: jest.fn(),
  };
});
