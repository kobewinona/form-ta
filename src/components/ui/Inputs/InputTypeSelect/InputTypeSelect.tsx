import React, { FC, useEffect } from 'react';
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
    watch,
    setValue,
    formState: { errors } } = useFormContext();
  const selectedOption = watch(name);
  const inputErrorMessage = errors[name]?.message as string;

  const handleChange = (option: Option | null) => {
    setValue(name, option?.value || '', { shouldValidate: true });
  };

  const handleBlur = () => {
    setValue(name, selectedOption || '', { shouldValidate: true });
  };

  useEffect(() => {
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
        onBlur={handleBlur}
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