import React, { FC, useState } from 'react';
import Select from 'react-select';

import InputWrapper from '../InputWrapper/InputWrapper';

import styles from './InputTypeSelect.module.css';

interface Option {
  value: string;
  label: string;
}

interface InputTypeSelectProps {
  name: string;
  label?: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
}

const InputTypeSelect: FC<InputTypeSelectProps> = ({
  name,
  label,
  options,
  placeholder= '',
  required = false,
}) => {
  const [inputOption, setInputOption] = useState<Option | null>(null);
  const [inputErrorMessage, setInputErrorMessage] = useState<string>('');

  const handleChange = (option: { value: string; label: string } | null) => {
    if (!option) {
      setInputErrorMessage('must be filled');
    }
    setInputOption(option);
  }

  return (
    <InputWrapper
      required={required}
      label={label}
      inputErrorMessage={inputErrorMessage}
    >
      <Select
        name={name}
        options={options}
        placeholder={placeholder}
        onChange={handleChange}
        classNamePrefix="react-select"
        value={inputOption}
        styles={styles}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </InputWrapper>
  );
};

export default InputTypeSelect;