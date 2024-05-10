import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import Select from 'react-select';

import InputWrapper from '../InputWrapper/InputWrapper';

import DropdownIndicator from './DropdownIndicator';
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
  const {
    register,
    setValue,
    formState: { errors } } = useFormContext();
  const inputErrorMessage = errors[name]?.message as string;

  const handleChange = (option: Option | null) => {
    setValue(name, option?.value || '', { shouldValidate: true });
  };

  React.useEffect(() => {
    register(name);
  }, [register, name]);

  return (
    <InputWrapper
      required={required}
      label={label}
      inputErrorMessage={inputErrorMessage}
    >
      <Select
        inputId="my-custom-input-id"
        classNamePrefix="react-select"
        name={name}
        options={options}
        placeholder={placeholder}
        onChange={handleChange}
        required={required}
        styles={styles}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: DropdownIndicator
      }}
      />
    </InputWrapper>
  );
};

export default InputTypeSelect;