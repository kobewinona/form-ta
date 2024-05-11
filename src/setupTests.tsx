import React from 'react';
import '@testing-library/jest-dom';

import { SelectOption } from './types/types';

interface MockSelectProps {
  options: SelectOption[];
  onChange: (option: SelectOption) => void;
  value: string | number;
}

jest.mock('react-select', () => ({
  __esModule: true,
  default: ({ options, onChange, value }: MockSelectProps) => (
    <select
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
